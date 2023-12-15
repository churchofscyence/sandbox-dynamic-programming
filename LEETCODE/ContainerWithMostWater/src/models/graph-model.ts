import {GraphDiagram} from '../decorators/graph-decorator.js';

export class Graph{

    @GraphDiagram 
    _state:number[] ;

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
