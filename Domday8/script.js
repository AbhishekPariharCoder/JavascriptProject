let time = document.querySelector(".time");
let btn = document.querySelector(".btn");
let clr = document.querySelector(".loadcolor");
let count = 0;
let interval;

btn.addEventListener("click", function() {
    interval = setInterval(function() {
        clr.style.width = count + "%";
        time.innerHTML = count + '%';
        btn.innerHTML = "downloading";
        count++;
        if (count >= 101) {
            clearInterval(interval);
            btn.innerHTML = "downloaded";
            btn.style.pointerEvents ='none';
        }
    }, 100);
});






// btn.addEventListener("click", function() {
//     interval = setInterval(function() {
//         clr.style.width = count + "%";
//         time.innerHTML = count + '%';
//         btn.innerHTML = "downloading";
//         count++;
//         if (count >= 101) {
//             clearInterval(interval);
//             btn.innerHTML = "downloaded";
//             btn.style.pointerEvents ='none';
//         }
//     }, 100);
// });



















