let h2 = document.querySelector('h2');
let btn = document.querySelector('button');

let flag = 0;
btn.addEventListener("click", function(){
    h2.innerHTML = "response is sending...";
    btn.innerHTML = "requesting...";
    if(flag==0){
        setTimeout(function(){
           h2.innerHTML = 'friend';
           btn.innerHTML = 'remove';
        },3000)
        flag = 1;
    }else{
        h2.innerHTML = 'stranger';
        btn.innerHTML = 'add friend';
        flag = 0;
    }
})
























// // Get the element to display coordinates
// const coordinatesDiv = document.getElementById('coordinates');

// // Add mousemove event listener to the document
// document.addEventListener('mousemove', (event) => {
//   // Get X and Y coordinates
//   const x = event.clientX; // X-coordinate relative to the viewport
//   const y = event.clientY; // Y-coordinate relative to the viewport

//   // Update the display
//   coordinatesDiv.textContent = `X: ${x}, Y: ${y}`;
// });


// console.log("Starting...");

// setTimeout(() => {
//   console.log("This message appears after 2 seconds");
// }, 2000);

// console.log("Ending...");



// let count = 0;

// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Count: ${count}`);
  
//   // Stop after 5 iterations
//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log("Interval cleared!");
//   }
// }, 1000);

































