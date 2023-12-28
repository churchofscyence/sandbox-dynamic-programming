export class CompareIndex {
    constructor(comparer, pointer) {
        this._comparer = comparer;
        this._pointer = pointer;
    }
    get comparer() { return this._comparer; }
    set comparer(value) { this._comparer = value; }
    get pointer() { return this._pointer; }
    set pointer(value) { this._pointer = value; }
}
export class SolutionUtil {
    static shortestHeight(h1, h2) {
        let shortest;
        if (h1 > h2) {
            shortest = h2;
        }
        else {
            shortest = h1;
        }
        return shortest;
    }
    static calculateArea(width, height) {
        let area = width * height;
        return area;
    }
    static calculateWidth(x1, x2) {
        if (x1 != x2) {
            if (x1 > x2) {
                return x1 - x2;
            }
            else {
                return x2 - x1;
            }
        }
        else {
            throw new Error('x1 and x2 can not be equal.');
        }
    }
    static generateCompareIndex(num) {
        let resultIndexes = [];
        for (let i = 0; i < num.length; i++) {
            for (let j = 0; j < num.length; j++) {
                if (i != j) {
                    resultIndexes.push(new CompareIndex(i, j));
                }
            }
        }
        return resultIndexes;
    }
}
//# sourceMappingURL=solution-util.js.map