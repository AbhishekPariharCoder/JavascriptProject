var box = document.querySelector('.box');
var body = document.querySelector('body');
var h1 = document.querySelector('h1');

body.addEventListener("mousemove", function(dets){
    box.style.top = dets.y + "px";
    box.style.left = dets.x + "px";
});


h1.addEventListener("mouseenter", function(dets){
  box.style.scale = 2;
  box.style.trasition = "all ease 0.3s";
});

h1.addEventListener("mouseleave", function(){
  box.style.scale = 1;
});





