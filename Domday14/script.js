var mobileObject = [{
    mobile: "iPhone 15",
    price: 70000,
    color: "Blue",
    quantity: 64
},{
    mobile: "oneplus",
    price: 10000,
    color: "Blue",
    quantity: 54
},{
    mobile: "samsung",
    price: 50000,
    color: "Blue",
    quantity: 43
}];


let sum = 0;
mobileObject.forEach(function(elem){
    sum += elem.price*elem.quantity;
})


console.log(sum);


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




















