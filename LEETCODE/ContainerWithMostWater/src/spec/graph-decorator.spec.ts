import { Base } from '../decorators/graph-decorator';

describe( 'Graph Decorator Test Suit', function (){

    let base = new Base() ;

    beforeEach(function() {
    });

    it('Test Setup - should be true', function (){

        expect(true).toEqual(true) ;

    });

    xit('Point Scale - should be ', function (){

        base._scaleX = 5 ;
        base._scaleY = 10 ;

        let points = base.pointScale(1,2)

        expect(points.x).toEqual(5) ;
        expect(points.y).toEqual(20) ;

    });

    it('Build Line Points - should be', function (){

        base._startX = 1 ;
        base._startY = 14 ;
        base._distanceBar = 2;

        let results = base.buildLinePoints( [1,8,6,2,5,4,8,3,7] );

        expect(results[0].x1).toEqual(5) ;

        expect(5).toEqual(5) ;


    });


});
