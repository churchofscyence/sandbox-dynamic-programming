import {GraphDiagram,Points} from '../decorators/graph-decorator.js';

@GraphDiagram( { distanceBar:30 } )
export class Graph{

    @Points
    _state:number[];
    _distanceBar:number = 10;

    constructor(state: number[]) {
        this._state = state;
    }

    get state(): number[] {
        return this._state;
    }

    set state(value: number[]) {
        this._state = value;
    }
}
