console.log('App is running!');

//To install jquery locally run "npm i --save-dev @types/jquery"

$(function(){
    $('#show').on('click' , function(){
         //alert("I've been clicked!");

         const canvas = <HTMLCanvasElement> document.getElementById("myCanvas")!;

         if( typeof canvas === "object"){
          const ctx = canvas.getContext("2d");

          if( ctx !== null){
               ctx.beginPath();
               ctx.fillStyle = "red";
               ctx.fillRect(20, 20, 300, 50);
      
               ctx.stroke();
          }

         }


    });
 });
