"use strict";
console.log('App is running!');
$(function () {
    $('#show').on('click', function () {
        const canvas = document.getElementById("myCanvas");
        if (typeof canvas === "object") {
            const ctx = canvas.getContext("2d");
            if (ctx !== null) {
                ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.fillRect(20, 20, 300, 50);
                ctx.stroke();
            }
        }
    });
});
//# sourceMappingURL=app.js.map