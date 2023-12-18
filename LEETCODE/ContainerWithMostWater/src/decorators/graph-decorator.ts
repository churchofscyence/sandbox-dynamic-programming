export function Points(target: any, propertyName: string) {
    let _points: number;


    Object.defineProperty(target, propertyName, {
        set: (newPoints: number) => {

            console.log(propertyName);
            console.log('Graph Decorator - Points is running!');

            _points = newPoints;
            console.log("Graph Decorator -  Points: " + _points);

            target.buildGraph(_points)

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
            constructor.prototype._startX = data.startX;
            constructor.prototype._startY = data.startY;
        
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
    _startX!:number;
    _startY!:number;

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

    get startX(): number {return this._startX;}
    set startX(value: number) {this._startX = value;}

    get startY(): number {return this._startY;}
    set startY(value: number) {this._startY = value;}


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

    buildGraph(state: number[]){

        if(this._ctx !== null){

            // Start a new Path of the horizontal line
            this._ctx.beginPath();
            let startPoint = this.pointScale(this._startX, this._startY);
            this._ctx.moveTo(startPoint.x, startPoint.y);

            let endPoint = this.pointScale(this._startX + (this._distanceBar* state.length), this._startY);
            this._ctx.lineTo(endPoint.y , endPoint.y);
                        
            // Draw the Path
            this._ctx.stroke();

            // Start a new Path of the vertical line
            this._ctx.beginPath();

            let x = this._startX;
            for (let i = 0; i < state.length; i++){

                console.log(x);

            }

        }

    }


    /**
     * Returns a point object with the x and y coordinates scaled according to the current scale of the canvas
     * @param x - the x coordinate of the point
     * @param y - the y coordinate of the point
     */
    pointScale(x: number, y: number): { x: number, y: number } {
        return {
            x: x * this._scaleX,
            y: y * this._scaleY,
        };
    }

    buildLinePoints(state: number[]) {

        let results :{ x1 :number, y1 :number, x2 :number, y2:number } [] = [];

        let start_x = this._startX;
        let start_y = this._startY;

        for(let i = 0; i < state.length; i++) {
            let points = {x1 :0, y1 : 0, x2 : 0, y2 : 0};

            points.x1 = start_x;
            points.y1 = start_y;

            start_x = start_x + this._distanceBar;



            results.push(points);
        }


        return results;

    }



}
