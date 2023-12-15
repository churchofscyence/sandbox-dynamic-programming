var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { GraphDiagram } from '../decorators/graph-decorator.js';
export class Graph {
    constructor(state) {
        this._state = state;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
}
__decorate([
    GraphDiagram
], Graph.prototype, "_state", void 0);
//# sourceMappingURL=graph-model.js.map