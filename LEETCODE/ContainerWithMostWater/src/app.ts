
import { Graph } from './models/graph-model.js';

console.log('App is running!');

//To install jquery locally run "npm i --save-dev @types/jquery"

$(function(){

     let graph = new Graph( [1,8,6,2,5,4,8,3,7] );

     console.log('App - show is running!');
     console.log(graph.state);

    $('#next').on('click' , function(){
         //alert("The Next button is clicked.");

         if( graph._ctx !== null){

          //Red Rectangle
          graph._ctx.beginPath();
          graph._ctx.lineWidth = 2;
          graph._ctx.strokeStyle = "red";
          graph._ctx.rect(200, 360, 160, 200);
          graph._ctx.stroke();
        }


     });


});
