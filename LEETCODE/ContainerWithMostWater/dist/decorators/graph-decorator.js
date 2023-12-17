export function Points(target, propertyName) {
    console.log('Graph Decorator - Points is running!');
    let _points;
    Object.defineProperty(target, propertyName, {
        set: (newPoints) => {
            _points = newPoints;
            console.log("Graph Decorator -  Points: " + _points);
            console.log("Logo: " + $("#logo").text());
        },
        get: () => _points
    });
}
export function GraphDiagram(data) {
    return function (constructor) {
        console.log('Graph Decorator - GraphDiagram is running!');
        console.log("Data: " + data);
        console.log("DistanceBar: " + data.distanceBar);
        if (typeof data.distanceBar !== 'undefined') {
            constructor.prototype._distanceBar = data.distanceBar;
            constructor.prototype._nameCanvas = data.nameCanvas;
            constructor.prototype.buildCanvas();
            console.log("Logo: " + $("#logo").text());
        }
    };
}
export class Base {
    constructor() {
        this._distanceBar = 10;
        this._nameCanvas = "canvas";
    }
    get distanceBar() { return this._distanceBar; }
    set distanceBar(value) { this._distanceBar = value; }
    get nameCanvas() { return this._nameCanvas; }
    set nameCanvas(value) { this._nameCanvas = value; }
    get canvas() { return this._canvas; }
    set canvas(value) { this._canvas = value; }
    get ctx() { return this._ctx; }
    set ctx(value) { this._ctx = value; }
    buildCanvas() {
        this._canvas = document.getElementById(this._nameCanvas);
        if (typeof this._canvas === "object") {
            if (this._ctx !== null) {
                this._ctx = this._canvas.getContext("2d");
            }
        }
    }
}
//# sourceMappingURL=graph-decorator.js.map