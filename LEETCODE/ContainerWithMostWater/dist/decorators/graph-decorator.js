export function Points(target, propertyName) {
    console.log('Graph Decorator - Points is running!');
    let _points;
    Object.defineProperty(target, propertyName, {
        set: (newPoints) => {
            _points = newPoints;
            console.log("Graph Decorator -  Points: " + _points);
        },
        get: () => _points
    });
}
export function GraphDiagram(setting) {
    console.log("Graph Decorator -  GraphDiagram : " + setting);
}
//# sourceMappingURL=graph-decorator.js.map