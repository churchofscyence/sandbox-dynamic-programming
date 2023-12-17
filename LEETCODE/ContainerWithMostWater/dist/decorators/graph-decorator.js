let _points;
export function Points(target, propertyName) {
    console.log('Graph Decorator - Points is running!');
    Object.defineProperty(target, propertyName, {
        set: (newPoints) => {
            _points = newPoints;
            console.log("Graph Decorator -  Points: " + _points);
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
        console.log("DistanceBar: " + data.distanceBar);
        if (typeof data.distanceBar !== 'undefined') {
            constructor.prototype._distanceBar = data.distanceBar;
            constructor.prototype._nameCanvas = data.nameCanvas;
            constructor.prototype._width = data.width;
            constructor.prototype._height = data.height;
            constructor.prototype._scaleX = data.scaleX;
            constructor.prototype._scaleY = data.scaleY;
            constructor.prototype.buildCanvas();
            console.log("Logo: " + $("#logo").text());
            console.log(_points);
        }
    };
}
export class Base {
    constructor() {
        this._distanceBar = 10;
        this._nameCanvas = "canvas";
        this._widthCanvas = 0;
        this._heightCanvas = 0;
        this._scaleX = 1;
        this._scaleY = 1;
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
}
//# sourceMappingURL=graph-decorator.js.map