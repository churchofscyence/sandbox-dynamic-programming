export function Points(target: any, propertyName: string) {

    console.log('Graph Decorator - Points is running!');

    let _points: number;

    Object.defineProperty(target, propertyName, {
        set: (newPoints: number) => {
            _points = newPoints;
            console.log("Graph Decorator -  Points: " + _points);

            console.log( "Logo: " + $("#logo").text() ); 
        },
        get: () => _points
    });
}

export function GraphDiagram (data : any)  {

    return function(constructor: Function) {
        
        console.log('Graph Decorator - GraphDiagram is running!');
        console.log("Data: " +data);    

        console.log("DistanceBar: " +data.distanceBar);
        if(typeof data.distanceBar !== 'undefined'){
            constructor.prototype._distanceBar = data.distanceBar;

            console.log( "Logo: " + $("#logo").text() ); 
        }
        
    }
    
}
