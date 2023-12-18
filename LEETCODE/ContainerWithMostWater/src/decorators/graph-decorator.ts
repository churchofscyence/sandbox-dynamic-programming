export function Points(target: any, propertyName: string) {
    let _points: number;


    Object.defineProperty(target, propertyName, {
        set: (newPoints: number) => {

            console.log(propertyName);
            console.log('Graph Decorator - Points is running!');

            _points = newPoints;
            console.log("Graph Decorator -  Points: " + _points);

            console.log( "Logo: " + $("#logo").text() ); 

            $("#points").text( _points.toString() ); 
        },
        get: () => _points
    });
}

export function GraphDiagram (data : any)  {

    return function(constructor: Function) {
        
        console.log('Graph Decorator - GraphDiagram is running!');
        console.log("Data: " + JSON.stringify(data) );    

            $("#distanceBar").text(data.distanceBar);

            constructor.prototype._distanceBar = data.distanceBar;
            constructor.prototype._nameCanvas = data.nameCanvas;
            constructor.prototype._width = data.width;
            constructor.prototype._height = data.height;
            constructor.prototype._scaleX = data.scaleX;
            constructor.prototype._scaleY = data.scaleY;
        
            constructor.prototype.buildCanvas();


        
    }
    
}

export class Base{

    _distanceBar!:number;
    _nameCanvas!:string;
    _canvas! :HTMLCanvasElement;
    _ctx!:CanvasRenderingContext2D;
    _widthCanvas!:number;
    _heightCanvas!:number;
    _scaleX!:number;
    _scaleY!:number;

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

    get widthCanvas(): number {return this._widthCanvas;}
    set widthCanvas(value: number) {this._widthCanvas = value;}

    get heightCanvas(): number {return this._heightCanvas;}
    set heightCanvas(value: number) {this._heightCanvas = value;}

    get scaleX(): number {return this._scaleX;}
    set scaleX(value: number) {this._scaleX = value;}

    get scaleY(): number {return this._scaleY;}
    set scaleY(value: number) {this._scaleY = value;}


    buildCanvas(){
        this._canvas = <HTMLCanvasElement> document.getElementById(this._nameCanvas)!;

        if( typeof this._canvas === "object"){
            if(this._ctx !== null){
                this._ctx = this._canvas.getContext("2d") as CanvasRenderingContext2D;
            }
   
        }

        if( typeof $("#"+this._nameCanvas).attr("width") !== "undefined"){
            this._widthCanvas = Number( $("#"+this._nameCanvas).attr("width"));
        }

        if( typeof $("#"+this._nameCanvas).attr("height") !== "undefined"){
            this._heightCanvas = Number( $("#"+this._nameCanvas).attr("height"));
        }
       
    }


}
