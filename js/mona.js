 document.querySelectorAll('body').forEach(function(ele) {
    ele.addEventListener('mousemove', function(event) {
       var eye = document.querySelectorAll(".eye");
       var x = (eye[0].offsetLeft) + (eye[0].offsetWidth / 2);
       var y = (eye[0].offsetTop) + (eye[0].offsetHeight / 2);
       var rad = Math.atan2(event.pageX - x, event.pageY - y);
       var rot = (rad * (180 / Math.PI) * -1) + 320;
       eye.forEach(function(ele) {
          ele.style['-webkit-transform'] = 'rotate(' + rot + 'deg)';
          ele.style['-moz-transform'] = 'rotate(' + rot + 'deg)';
          ele.style['-ms-transform'] = 'rotate(' + rot + 'deg)';
          ele.style['transform'] = 'rotate(' + rot + 'deg)';
       });
    });
 });

$(function()
 {

    let canvas = document.getElementById('mycanvas');
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.fillRect(35, 35, 50, 50);
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.fillRect(100, 10, 100, 100);
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.fillRect(120, 30, 20, 20);

    let i = 0;

    $("#container").mouseover(function () {
       drawSmiley();
       drawRect();
       i += 1;
       console.log(i);
    });


    function drawRect() {
       const canvas = document.getElementById('canvas');
       if (canvas.getContext) {
          const ctx = canvas.getContext('2d');

          ctx.fillRect(25, 25, 100, 100);
          ctx.clearRect(45, 45, 60, 60);
          ctx.strokeRect(50, 50, 50, 50);
       }
    }

    function drawSmiley() {
       const canvas = document.getElementById("canvas");
       if (canvas.getContext) {
          const ctx = canvas.getContext("2d");

          ctx.beginPath();
          ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
          ctx.moveTo(110, 75);
          ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
          ctx.moveTo(65, 65);
          ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
          ctx.moveTo(95, 65);
          ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
          ctx.stroke();
       };
    };
 });
