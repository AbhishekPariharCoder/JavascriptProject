var btn = document.querySelector('button');
var body = document.querySelector('body');

const insectImages = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUaHO08mRUYJy8aZfnVZ81jzY3lqRzNCwftQ&s" },
    { src: "https://png.pngtree.com/png-vector/20240122/ourlarge/pngtree-illustration-of-a-cartoon-bug-png-image_11455019.png" },
    { src: "https://i.pinimg.com/564x/5d/43/44/5d434476274016b7e4af1e7c2f3c62e9.jpg" },
    { src: "https://img.freepik.com/free-vector/ladybug-cartoon-character-isolated_1308-96977.jpg?semt=ais_hybrid" },
    { src: "https://c8.alamy.com/comp/2X9D41E/mosquito-cartoon-isolated-on-white-background-2X9D41E.jpg" },
    { src: "https://www.shutterstock.com/image-vector/vector-illustration-cartoon-cockroach-running-260nw-160493363.jpg" },
    { src: "https://www.shutterstock.com/image-vector/scared-cockroach-cartoon-on-white-260nw-2019059240.jpg" },
  ];

btn.addEventListener("click", function(){
    var valueX = Math.random()*96;
    var valueY = Math.random()*96;
    var rotate = Math.random()*360;
    var image = Math.floor(Math.random()*7);
    var img = document.createElement("img");
    img.setAttribute("src", insectImages[image].src);
    img.style.height = '60px';
    img.style.position = "absolute";
    img.style.top = valueX + "%";
    img.style.left = valueY + "%";
    img.style.rotate = rotate + "deg";
    body.appendChild(img);
});







