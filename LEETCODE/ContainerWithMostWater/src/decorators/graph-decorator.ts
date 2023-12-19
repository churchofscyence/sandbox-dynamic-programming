export class LinePoints {

    private _index :number;

    private _x1 :number = 0;
    private _y1 :number = 0;
    private _x2 :number = 0;
    private _y2 :number = 0;

    constructor(index: number ) {
        this._index = index;
    }

    get index(): number {return this._index;}
    set index(value: number) {this._index = value;}

    get x1(): number {return this._x1;}
    set x1(value: number) {this._x1 = value;}

    get y1(): number {return this._y1;}
    set y1(value: number) {this._y1 = value;}

    get x2(): number {return this._x2;}
    set x2(value: number) {this._x2 = value;}

    get y2(): number {return this._y2;}
    set y2(value: number) {this._y2 = value;}
}

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

            // Start a new Path of the vertical lines
            let results:LinePoints[] = this.buildLinePoints(state)

            for (let i = 0; i < results.length; i++){

                this._ctx.beginPath();
                this._ctx.lineWidth = 6;

                let startLine = this.pointScale(results[i].x1 , results[i].y1);
                console.log( " x1 : " + startLine.x + " y1: " + startLine.y);
                this._ctx.moveTo(startLine.x, startLine.y);

                let endLine = this.pointScale(results[i].x2 , results[i].y2 );
                console.log( " x2 : " + endLine.x +" y2: " + endLine.y);
                this._ctx.lineTo(endLine.x, endLine.y);

                console.log( "_____________________________________________________________");

                this._ctx.stroke();

                        //Text 
                        this._ctx.font = "30px Arial";
                        this._ctx.fillText(state[i].toString(),endLine.x ,endLine.y -1);
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

        let results:LinePoints[] = [];
        let initFlag:boolean = true;

        for(let i = 0; i < state.length; i++) {

            let linePoint = new LinePoints(i);

            if(initFlag){
                initFlag = false;
                linePoint.x1 = this._startX;
            }else{
                linePoint.x1 = results[i-1] .x1 + this._distanceBar;
            }
            // Make all the lines are in straight line horizontally.
            linePoint.x2 = linePoint.x1;
            linePoint.y1 = this._startY;

            linePoint.y2 = linePoint.y1 - state[i];

            results.push(linePoint);
        }

        return results;

    }



}
