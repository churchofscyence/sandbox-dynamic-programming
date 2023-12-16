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
            console.log("Logo: " + $("#logo").text());
        }
    };
}
//# sourceMappingURL=graph-decorator.js.map