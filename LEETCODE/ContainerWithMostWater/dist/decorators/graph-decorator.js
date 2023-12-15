export function GraphDiagram(target, propertyName) {
    console.log('GraphDiagram decorator is running!');
    let points = target[propertyName];
    console.log("Points: " + points);
    console.log("Target : " + target);
    console.log(" Property Name: " + propertyName);
}
//# sourceMappingURL=graph-decorator.js.map