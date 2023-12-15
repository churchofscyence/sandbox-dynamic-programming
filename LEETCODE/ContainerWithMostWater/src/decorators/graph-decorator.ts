export function Points(target: any, propertyName: string) {

    console.log('Graph Decorator - Points is running!');

    let _points: number;

    Object.defineProperty(target, propertyName, {
        set: (newPoints: number) => {
            _points = newPoints;
            console.log("Graph Decorator -  Points: " + _points);
        },
        get: () => _points
    });
}

export function GraphDiagram (template :any) {
    console.log("Graph Decorator -  GraphDiagram");

    return function(constructor:any){
        console.log(template);  

    }

}
