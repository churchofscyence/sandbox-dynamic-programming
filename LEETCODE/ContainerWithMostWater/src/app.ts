
import { Graph } from './models/graph-model.js';

console.log('App is running!');

//To install jquery locally run "npm i --save-dev @types/jquery"

$(function(){

    $('#show').on('click' , function(){
         //alert("I've been clicked!");

         let graph = new Graph( [1,8,6,2,5,4,8,3,7] );

         console.log(graph.state);

          if( graph._ctx !== null){

               // Start a new Path
               graph._ctx.beginPath();
               graph._ctx.moveTo(500, 500);
               graph._ctx.lineTo(500, 1600);

               // Draw the Path
               graph._ctx.stroke();



          }





     });


});
