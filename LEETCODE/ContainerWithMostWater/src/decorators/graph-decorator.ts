
export function GraphDiagram(target: any, propertyName: string) {

    console.log('GraphDiagram decorator is running!');

    let points: number = target[propertyName];

    console.log("Points: " + points);

    console.log("Target : " + target);
    console.log(" Property Name: " + propertyName);
}