import { Graph } from './models/graph-model.js';
console.log('App is running!');
$(function () {
    $('#show').on('click', function () {
        let graph = new Graph([1, 8, 6, 2, 5, 4, 8, 3, 7]);
        console.log(graph.state);
        if (graph._ctx !== null) {
            graph._ctx.beginPath();
            graph._ctx.moveTo(500, 500);
            graph._ctx.lineTo(500, 1600);
            graph._ctx.stroke();
        }
    });
});
//# sourceMappingURL=app.js.map