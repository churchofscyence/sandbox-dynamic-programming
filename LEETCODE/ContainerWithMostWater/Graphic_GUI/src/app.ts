
import { Graph } from './models/graph-model.js';

console.log('App is running!');

//To install jquery locally run "npm i --save-dev @types/jquery"

$(function(){

     let graph: Graph;
     let bars: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7];
     let initTables: boolean = true;
     let counterIndexes:number;
     let counterNext:number = 0;

     let nameCanvas: string = "graph-canvas";

     let clearCanvas = function(){

          graph = new Graph( [] );

          let widthCanvas = 0;
          let heightCanvas = 0

          if( typeof $("#"+nameCanvas).attr("width") !== "undefined"){
               widthCanvas = Number( $("#"+nameCanvas).attr("width"));
           }
   
           if( typeof $("#"+nameCanvas).attr("height") !== "undefined"){
               heightCanvas = Number( $("#"+nameCanvas).attr("height"));
           }

           if( graph._ctx !== null){
               graph._ctx.clearRect(0, 0, widthCanvas, heightCanvas);
           }

           
     };

     let clearTable = function(){

          for (let i = 0; i < counterIndexes; i++) {
               $("#h"+i).text("");
               $("#w"+i).text("");
               $("#a"+i).text("");
          }

     }

     let generateIndexes = function(state: number[]){

          let result : any = [];

          let initFlag = true;
          counterIndexes = 0;

          for(let x1 = 0; x1 < state.length; x1++){
               for(let x2 = 0; x2 < state.length; x2++){

                    if(x1!= x2){

                         if( initFlag ){

                              $("#pointer").text( x1 );
                              $("#comparer").text( x2 );

                              initFlag = false;
                         }

                         result.push( { Pointer: x1, Comparer: x2, Height:0, Width:0, Area:0 } );
                         if(document.getElementById("dataTable") != null){
                              // @ts-ignore
                              document.getElementById("dataTable").insertRow(-1).innerHTML = '<td id="i'+counterIndexes+'" >'+ counterIndexes +'</td> <td id="p'+counterIndexes+'" >'+ x1 +'</td> <td id="c'+counterIndexes+'" >'+ x2 +'</td> <td id="h'+counterIndexes+'"></td>   <td id="w'+counterIndexes+'"></td>   <td id="a'+counterIndexes+'"></td>';
                              counterIndexes++;
                         }
                         
                    
                    }
                }

                
          }

          return result;

     };

     let drawContainers = function(color:string, x:number, y:number, width:number, height:number){

          graph._ctx.beginPath();
          graph._ctx.lineWidth = 2;
          graph._ctx.strokeStyle = color;
          graph._ctx.rect(x, y, width, height);
          graph._ctx.stroke();
     }



    $('#next').on('click' , function(){
         //alert("The Next Button was clicked.");
         console.log('App - The Next Button was clicked.');

         if(counterNext == counterIndexes){
          clearTable();
          counterNext = 0;
         }

         clearCanvas();

         if(initTables){
          generateIndexes(bars);
          initTables = false;
         }

         graph = new Graph( bars);

         console.log("Counter Next: "  + counterNext)

         let pointer = Number( $("#p"+counterNext).text() );
         let comparer = Number( $("#c"+counterNext).text() );

         console.log("Pointer: " + pointer);
         console.log("Comparer: " + comparer);

         let height = bars[pointer] < bars[comparer] ? bars[pointer] : bars[comparer];
         $("#h"+counterNext).text(height);

         let width = pointer - comparer > 0 ? pointer - comparer : comparer - pointer;
         $("#w"+counterNext).text(width);

         $("#a"+counterNext).text(height * width);

         if(typeof pointer === 'number' && isFinite(pointer)){
          console.log( "Pointer List: " + graph._pointList [pointer].toString() );
         }

         if(typeof comparer === 'number' && isFinite(comparer)){
          console.log( "Comparer List: " + graph._pointList [comparer].toString() );
         }
         

         if( graph._ctx !== null){

          let xRect = graph._pointList [pointer].x2  < graph._pointList [comparer].x2 ? graph._pointList [pointer].x2 :graph._pointList [comparer].x2;
          let yRect = graph._pointList [pointer].y2  > graph._pointList [comparer].y2 ? graph._pointList [pointer].y2 :graph._pointList [comparer].y2;

          console.log( "xRect: " + xRect + " yRect: " + yRect + "Width: " + width * graph._scaleX * graph._distanceBar + " Height: " + height* graph._scaleY);

          drawContainers("red",xRect , yRect, width * graph._scaleX * graph._distanceBar , height* graph._scaleY);

        }

        counterNext++;

        console.log( "______________________________");

     });

     $('#clear').on('click' , function(){
          //alert("The Clear Button was clicked.");
          console.log('App - The Clear Button was clicked.');
          clearCanvas();

     });

    $(document).ready(function () {


        $("#ex1").click(function () {
            //alert("Example 1");

            // @ts-ignore
            bars = [1, 8, 6, 2, 5, 4, 8, 3, 7];
            graph = new Graph( bars );

            $("#barsHeight").text( bars.toString() );
            $("#barsDistance").text(graph.distanceBar);

        });
        $("#ex2").click(function () {
            //alert("Example 2");

            // @ts-ignore
            bars = [2, 3, 1, 4];
            graph = new Graph( bars );

            $("#barsHeight").text( bars.toString() );
            $("#barsDistance").text(graph.distanceBar);

        });


    });




});
