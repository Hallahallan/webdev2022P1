//Eyes "following" cursor... isn't optimal...
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

