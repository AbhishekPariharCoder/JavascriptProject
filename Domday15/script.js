var body = document.querySelector('body');

var card = document.querySelectorAll('.card');
var h1 = document.querySelectorAll('h1');
var p = document.querySelectorAll('p');

const data = [
    {
      heading: "Heading 1",
      paragraph: "This is the first paragraph of dummy data. It contains some text to show how this structure works."
    },
    {
      heading: "Heading 2",
      paragraph: "Here is the second paragraph. This text is also just placeholder content to fill out the structure."
    },
    {
      heading: "Heading 3",
      paragraph: "The third paragraph continues with dummy text, providing more examples for testing or development purposes."
    },
    {
      heading: "Heading 4",
      paragraph: "This is the fourth paragraph. It follows the same pattern of providing placeholder content for the demo."
    }
  ];
  
//   console.log(data);

var sum = '';


  data.forEach((item, index) => {
    h1.innerHTML = item.heading;
    p.innerHTML = item.paragraph;
  })














// var body = document.querySelector('body');

// var card = document.querySelectorAll('.card');
// var h1 = document.querySelectorAll('h1');
// var p = document.querySelectorAll('p');

// const data = [
//     {
//       heading: "Heading 1",
//       paragraph: "This is the first paragraph of dummy data. It contains some text to show how this structure works."
//     },
//     {
//       heading: "Heading 2",
//       paragraph: "Here is the second paragraph. This text is also just placeholder content to fill out the structure."
//     },
//     {
//       heading: "Heading 3",
//       paragraph: "The third paragraph continues with dummy text, providing more examples for testing or development purposes."
//     },
//     {
//       heading: "Heading 4",
//       paragraph: "This is the fourth paragraph. It follows the same pattern of providing placeholder content for the demo."
//     }
//   ];
  
// //   console.log(data);

// var sum = '';


//   data.forEach((item, index) => {
//     // card[index].querySelector('h1').textContent = item.heading;
//     // card[index].querySelector('p').textContent = item.paragraph
//     sum += `  
//     <div class="card">
//     <h1>${item.heading}</h1>
//     <p>${item.paragraph}</p>
//     </div>
//     `
//   })

//   body.innerHTML = sum;













// var mobileObject = [{
//     mobile: "iPhone 15",
//     price: 70000,
//     color: "Blue",
//     quantity: 64
// },{
//     mobile: "oneplus",
//     price: 10000,
//     color: "Blue",
//     quantity: 54
// },{
//     mobile: "samsung",
//     price: 50000,
//     color: "Blue",
//     quantity: 43
// }];


// let sum = 0;
// mobileObject.forEach(function(elem){
//     sum += elem.price*elem.quantity;
// })


// console.log(sum);


// var user = [
//     {
//         name: 'John',
//         weight:'22'
//     },
//     {
//         name: 'harsh',
//         weight:'52'
//     },
//     {
//         name: 'himashu',
//         weight:'68'
//     },
//     {
//         name: 'hima',
//         weight:'75'
//     },
//     {
//         name: 'abhi',
//         weight:'29'
//     },
//     {
//         name: 'unko',
//         weight:'79'
//     }
// ]

// let weightTotal = 500;
// let sum = 0;
// user.forEach(function(elem){
//     sum += parseInt(elem.weight);
// })

// if(weightTotal < sum){
//     console.log("lift is good")
// }else{
//     console.log("lift is not good")
// }




















