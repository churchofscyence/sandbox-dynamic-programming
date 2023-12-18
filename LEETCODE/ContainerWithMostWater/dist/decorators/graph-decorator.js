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
            this._ctx.beginPath();
            let startPoint = this.pointScale(this._startX, this._startY);
            this._ctx.moveTo(startPoint.x, startPoint.y);
            let endPoint = this.pointScale(this._startX + (this._distanceBar * state.length), this._startY);
            this._ctx.lineTo(endPoint.y, endPoint.y);
            this._ctx.stroke();
            this._ctx.beginPath();
            let x = this._startX;
            for (let i = 0; i < state.length; i++) {
                console.log(x);
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
        let start_x = this._startX;
        let start_y = this._startY;
        for (let i = 0; i < state.length; i++) {
            let points = { x1: 0, y1: 0, x2: 0, y2: 0 };
            points.x1 = start_x;
            points.y1 = start_y;
            start_x = start_x + this._distanceBar;
            results.push(points);
        }
        return results;
    }
}
//# sourceMappingURL=graph-decorator.js.map