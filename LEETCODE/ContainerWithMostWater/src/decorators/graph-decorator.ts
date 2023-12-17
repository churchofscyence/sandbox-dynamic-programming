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
            constructor.prototype._nameCanvas = data.nameCanvas;
            constructor.prototype.buildCanvas();

            console.log( "Logo: " + $("#logo").text() ); 
        }
        
    }
    
}

export class Base{

    _distanceBar:number = 10;
    _nameCanvas:string = "canvas";
    _canvas! :HTMLCanvasElement;
    _ctx!:CanvasRenderingContext2D;

    public constructor(){
    }

    get distanceBar(): number {return this._distanceBar;}
    set distanceBar(value: number) {this._distanceBar = value;}

    get nameCanvas(): string {return this._nameCanvas;}
    set nameCanvas(value: string) {this._nameCanvas = value;}

    get canvas(): HTMLCanvasElement {return this._canvas;}
    set canvas(value: HTMLCanvasElement) {this._canvas = value;}

    get ctx(): CanvasRenderingContext2D {return this._ctx;}
    set ctx(value: CanvasRenderingContext2D) {this._ctx = value;}

    buildCanvas(){
        this._canvas = <HTMLCanvasElement> document.getElementById(this._nameCanvas)!;

        if( typeof this._canvas === "object"){
            if(this._ctx !== null){
                this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
            }
   
        }
    }


}
