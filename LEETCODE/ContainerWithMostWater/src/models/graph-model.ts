import {GraphDiagram, Base, Points} from '../decorators/graph-decorator.js';

@GraphDiagram({ 
    distanceBar:2, 
    nameCanvas:"graph-canvas",
    scaleX:40,
    scaleY:40,
    startX:1,
    startY:14
})
export class Graph extends Base{

    @Points
    _state:number[];
    

    constructor(state: number[]) {
        super();
        this._state = state;
    }

    get state(): number[] {return this._state;}
    set state(value: number[]) {this._state = value;}
}
