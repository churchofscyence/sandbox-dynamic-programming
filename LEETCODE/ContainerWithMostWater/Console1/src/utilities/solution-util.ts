export class CompareIndex{

    private _comparer:number;
    private _pointer:number;

    constructor(comparer: number, pointer: number) {
        this._comparer = comparer;
        this._pointer = pointer;
    }


    get comparer(): number {return this._comparer;}
    set comparer(value: number) {this._comparer = value;}

    get pointer(): number {return this._pointer;}
    set pointer(value: number) {this._pointer = value;}
}


export class SolutionUtil{

    /**
     * Returns the shortest height between two given heights.
     *
     * @param h1 - One height to be compared .
     * @param h2 - Another height to be compared .
     * @returns The shortest height of firstHeight and secondHeight.
     *
     * @Example
     *     If h1 = 5 and  h2 = 8 then the shortest height should be  h1 = 5.
     *
     */
    static shortestHeight(h1: number, h2: number): number {
        let shortest: number;
        if (h1 > h2) {
            shortest = h2;
        } else {
            shortest = h1;
        }
        return shortest;
    }

    /**
     * Calculates the area of a rectangle given its width and height.
     *
     * @param width - The width of the rectangle.
     * @param height - The height of the rectangle.
     * @returns The area of the rectangle.
     */
    static calculateArea(width:number,height:number){
        let area:number = width * height;
        return area;
    }

    /**
     * TypeScript code for calculating the width between two numbers.
     */

    static calculateWidth(x1 :number,x2:number){

        if(x1 != x2){
            if(x1 > x2){
                return x1 - x2;
            }else{
                return x2 - x1;
            }
        }else{
            throw new Error('x1 and x2 can not be equal.');
        }
    }

    /**
     * This TypeScript code in the file "solution-util.ts" generates an array of CompareIndex objects based on the
     * input array of numbers. Each CompareIndex object represents a pair of indices from the input array.
     * The generateCompareIndex function iterates over the input array and creates CompareIndex objects for all
     * possible pairs of indices. The resulting array of CompareIndex objects is then returned.
     */

    static generateCompareIndex(num:number[]){

        let resultIndexes:CompareIndex[] = [];

        for(let i = 0; i < num.length; i++){
            for(let j = 0; j < num.length; j++){
                if(i != j){
                    resultIndexes.push(new CompareIndex(i,j))
                }
            }
        }

        return resultIndexes;
    }


}
