import { SolutionUtil } from "../utilities/solution-util"

describe( 'Solution Util Test Suit', function (){

    beforeEach(function() {

    });

    it('Test Setup - True should be true.', function (){
        /*This test is generic test to check if the Jest Test Suite is working properly*/
        expect(true).toEqual(true) ;
    });


    it('shortestHeight Method - The firstHeight is 7 and secondHeight is 9 so the shortest height should be 7.', function (){

        let firstHeight = 7;
        let secondHeight = 9;

        let result = SolutionUtil.shortestHeight(firstHeight,secondHeight);

        expect( result ).toEqual(7) ;

    });

    it('shortestHeight Method - The firstHeight is 7 and secondHeight is 3 so the shortest height should be 3.', function (){

        let firstHeight = 7;
        let secondHeight = 3;

        let result = SolutionUtil.shortestHeight(firstHeight,secondHeight);

        expect( result ).toEqual(3) ;

    });

    it('shortestHeight Method - The firstHeight is 6 and secondHeight is 6 so the shortest height should be 6.', function (){

        let firstHeight = 6;
        let secondHeight = 6;

        let result = SolutionUtil.shortestHeight(firstHeight,secondHeight);

        expect( result ).toEqual(6) ;

    });

    it('calculateArea Method - The width is 8 and height is 5 so the area should be 40.', function (){

        let width = 8;
        let height = 5;

        let result = SolutionUtil.calculateArea(width,height);

        expect( result ).toEqual(40) ;

    });

    it('calculateWidth Method - The x1 is 3 and x2 is 5 so width should be 2. ', function (){

        let x1= 3;
        let x2 = 5;

        let result = SolutionUtil.calculateWidth(x1,x2);

        expect( result ).toEqual(2) ;

    });

    it('calculateWidth Method - The x1 is 7 and x2 is 2 so width should be 5. ', function (){

        let x1= 7;
        let x2 = 2;

        let result = SolutionUtil.calculateWidth(x1,x2);

        expect( result ).toEqual(5) ;

    });

    it('calculateWidth Method - The x1 and x2 have the same value so the method should throw error. ', function (){

        try {
            let x1= 3;
            let x2= 3;
            SolutionUtil.calculateWidth(x1,x2)
        } catch (error:any) {
            //console.log(error.message);
            expect(error.message).toEqual("x1 and x2 can not be equal.");
        }

    });

    it('generateCompareIndex Method - The length of the result should be 6. The elements should be {0,1},{0,2},{1,0},{1,2}, and {2,0},{2,1} of the results array', function (){


        let result = SolutionUtil.generateCompareIndex([9,3,5] );


        expect( result.length).toEqual(6) ;

        expect( result[0].comparer ).toEqual(0) ;
        expect( result[0].pointer ).toEqual(1) ;

        expect( result[1].comparer ).toEqual(0) ;
        expect( result[1].pointer ).toEqual(2) ;

        expect( result[2].comparer ).toEqual(1) ;
        expect( result[2].pointer ).toEqual(0) ;

        expect( result[3].comparer ).toEqual(1) ;
        expect( result[3].pointer ).toEqual(2) ;

        expect( result[4].comparer ).toEqual(2) ;
        expect( result[4].pointer ).toEqual(0) ;

        expect( result[5].comparer ).toEqual(2) ;
        expect( result[5].pointer ).toEqual(1) ;

    });







});
