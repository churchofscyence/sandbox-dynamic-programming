export class LinePoints {
    constructor(index) {
        this._x1 = 0;
        this._y1 = 0;
        this._x2 = 0;
        this._y2 = 0;
        this._index = index;
    }
    get index() { return this._index; }
    set index(value) { this._index = value; }
    get x1() { return this._x1; }
    set x1(value) { this._x1 = value; }
    get y1() { return this._y1; }
    set y1(value) { this._y1 = value; }
    get x2() { return this._x2; }
    set x2(value) { this._x2 = value; }
    get y2() { return this._y2; }
    set y2(value) { this._y2 = value; }
}
export function Points(target, propertyName) {
    let _points;
    Object.defineProperty(target, propertyName, {
        set: (newPoints) => {
            console.log(propertyName);
            console.log('Graph Decorator - Points is running!');
            _points = newPoints;
            console.log("Graph Decorator -  Points: " + _points);
            target.buildGraph(_points);
            console.log("Logo: " + $("#logo").text());
            $("#points").text(_points.toString());
        },
        get: () => _points
    });
}
export function GraphDiagram(data) {
    return function (constructor) {
        console.log('Graph Decorator - GraphDiagram is running!');
        console.log("Data: " + JSON.stringify(data));
        $("#distanceBar").text(data.distanceBar);
        constructor.prototype._distanceBar = data.distanceBar;
        constructor.prototype._nameCanvas = data.nameCanvas;
        constructor.prototype._width = data.width;
        constructor.prototype._height = data.height;
        constructor.prototype._scaleX = data.scaleX;
        constructor.prototype._scaleY = data.scaleY;
        constructor.prototype._startX = data.startX;
        constructor.prototype._startY = data.startY;
        constructor.prototype.buildCanvas();
    };
}
export class Base {
    constructor() {
    }
    get distanceBar() { return this._distanceBar; }
    set distanceBar(value) { this._distanceBar = value; }
    get nameCanvas() { return this._nameCanvas; }
    set nameCanvas(value) { this._nameCanvas = value; }
    get canvas() { return this._canvas; }
    set canvas(value) { this._canvas = value; }
    get ctx() { return this._ctx; }
    set ctx(value) { this._ctx = value; }
    get widthCanvas() { return this._widthCanvas; }
    set widthCanvas(value) { this._widthCanvas = value; }
    get heightCanvas() { return this._heightCanvas; }
    set heightCanvas(value) { this._heightCanvas = value; }
    get scaleX() { return this._scaleX; }
    set scaleX(value) { this._scaleX = value; }
    get scaleY() { return this._scaleY; }
    set scaleY(value) { this._scaleY = value; }
    get startX() { return this._startX; }
    set startX(value) { this._startX = value; }
    get startY() { return this._startY; }
    set startY(value) { this._startY = value; }
    buildCanvas() {
        this._canvas = document.getElementById(this._nameCanvas);
        if (typeof this._canvas === "object") {
            if (this._ctx !== null) {
                this._ctx = this._canvas.getContext("2d");
            }
        }
        if (typeof $("#" + this._nameCanvas).attr("width") !== "undefined") {
            this._widthCanvas = Number($("#" + this._nameCanvas).attr("width"));
        }
        if (typeof $("#" + this._nameCanvas).attr("height") !== "undefined") {
            this._heightCanvas = Number($("#" + this._nameCanvas).attr("height"));
        }
    }
    buildGraph(state) {
        if (this._ctx !== null) {
            let results = this.buildLinePoints(state);
            for (let i = 0; i < results.length; i++) {
                this._ctx.beginPath();
                this._ctx.lineWidth = 6;
                let startLine = this.pointScale(results[i].x1, results[i].y1);
                console.log(" x1 : " + startLine.x + " y1: " + startLine.y);
                this._ctx.moveTo(startLine.x, startLine.y);
                let endLine = this.pointScale(results[i].x2, results[i].y2);
                console.log(" x2 : " + endLine.x + " y2: " + endLine.y);
                this._ctx.lineTo(endLine.x, endLine.y);
                console.log("_____________________________________________________________");
                this._ctx.stroke();
                this._ctx.font = "30px Arial";
                this._ctx.fillText(state[i].toString(), endLine.x, endLine.y - 1);
            }
        }
    }
    pointScale(x, y) {
        return {
            x: x * this._scaleX,
            y: y * this._scaleY,
        };
    }
    buildLinePoints(state) {
        let results = [];
        let initFlag = true;
        for (let i = 0; i < state.length; i++) {
            let linePoint = new LinePoints(i);
            if (initFlag) {
                initFlag = false;
                linePoint.x1 = this._startX;
            }
            else {
                linePoint.x1 = results[i - 1].x1 + this._distanceBar;
            }
            linePoint.x2 = linePoint.x1;
            linePoint.y1 = this._startY;
            linePoint.y2 = linePoint.y1 - state[i];
            results.push(linePoint);
        }
        return results;
    }
}
//# sourceMappingURL=graph-decorator.js.map