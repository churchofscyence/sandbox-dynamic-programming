
import { Graph } from './models/graph-model.js';

console.log('App is running!');

//To install jquery locally run "npm i --save-dev @types/jquery"

$(function(){



    $('#show').on('click' , function(){
         //alert("I've been clicked!");

         let graph = new Graph([1,8,6,2,5,4,8,3,7] );

         console.log(graph.state);

         const canvas = <HTMLCanvasElement> document.getElementById("myCanvas")!;

         if( typeof canvas === "object"){
          const ctx = canvas.getContext("2d");

          if( ctx !== null){

               // Start a new Path
               ctx.beginPath();
               ctx.moveTo(100, 500);
               ctx.lineTo(700, 500);

               // Draw the Path
               ctx.stroke();

              // Start a new Path
              ctx.beginPath();
              ctx.moveTo(160, 480);
              ctx.lineTo(160, 500);
               
              // Draw the Path
              ctx.stroke();

              // Start a new Path
              ctx.beginPath();
              ctx.moveTo(220, 340);
              ctx.lineTo(220, 500);
                                             
               // Draw the Path
              ctx.stroke();

          }

         }


    });
 });
