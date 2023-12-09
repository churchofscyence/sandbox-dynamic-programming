"use strict";
console.log('App is running!');
$(function () {
    $('#show').on('click', function () {
        //alert("I've been clicked!");
        const c = document.getElementById("myCanvas");
        // @ts-ignore
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(20, 20, 300, 50);
        ctx.stroke();
    });
});
//# sourceMappingURL=app.js.map