import { Base } from '../decorators/graph-decorator';
describe('Graph Decorator Test Suit', function () {
    let base = new Base();
    let results;
    beforeEach(function () {
        base._scaleX = 5;
        base._scaleY = 10;
        base._startX = 1;
        base._startY = 14;
        base._distanceBar = 2;
        results = base.buildLinePoints([1, 8, 6, 2, 5, 4, 8, 3, 7]);
    });
    it('Test Setup - True should be true.', function () {
        expect(true).toEqual(true);
    });
    it('Point Scale - For x and y should be 5 for x and 20 for y.', function () {
        let points = base.pointScale(1, 2);
        expect(points.x).toEqual(5);
        expect(points.y).toEqual(20);
    });
    it('Build Line Points - The Line Points Index should be the same as the Class Array index.', function () {
        for (const [index, elements] of results.entries()) {
            expect(elements.index).toEqual(index);
        }
    });
    it('Build Line Points - The element x1 in LinePoints object should be [ 1, 3, 5, 7, 9, 11, 13, 15, 17 ]', function () {
        for (const [index, element] of [1, 3, 5, 7, 9, 11, 13, 15, 17].entries()) {
            expect(results[index].x1).toEqual(element);
        }
        ;
    });
    it('Build Line Points - The element x2 in LinePoints object should be [ 1, 3, 5, 7, 9, 11, 13, 15, 17 ]', function () {
        for (const [index, element] of [1, 3, 5, 7, 9, 11, 13, 15, 17].entries()) {
            expect(results[index].x2).toEqual(element);
        }
        ;
    });
    it('Build Line Points - The element y1 in LinePoints object should be 14', function () {
        for (const [index, element] of results.entries()) {
            expect(element.index).toEqual(index);
            expect(element.y1).toEqual(14);
        }
        ;
    });
    it('Build Line Points - The element y2 in LinePoints object should be [ 13, 6, 8, 12, 9, 10, 6, 11, 7 ]', function () {
        for (const [index, element] of [13, 6, 8, 12, 9, 10, 6, 11, 7].entries()) {
            expect(results[index].y2).toEqual(element);
        }
        ;
    });
});
//# sourceMappingURL=graph-decorator.spec.js.map