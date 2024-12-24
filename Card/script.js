const users = [
  {
    profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Passionate traveler and food lover sharing unique experiences.",
    username: "wanderlust123",
    fullName: "Aarav Sharma",
    mediaUploadedCount: 120,
    followersCount: 4500,
    followingCount: 320,
    coverPhoto: "https://images.unsplash.com/photo-1684061578510-80d12e70d1ee?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=2506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tech geek and gadget reviewer with honest opinions.",
    username: "techGuru",
    fullName: "Ishita Patel",
    mediaUploadedCount: 85,
    followersCount: 8700,
    followingCount: 250,
    coverPhoto: "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fitness enthusiast inspiring a healthy lifestyle daily.",
    username: "fitLife",
    fullName: "Rohan Mehta",
    mediaUploadedCount: 150,
    followersCount: 12000,
    followingCount: 180,
    coverPhoto: "https://images.unsplash.com/photo-1680536425297-59f8a22e4a76?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Artist showcasing creativity through vibrant artworks and sketches.",
    username: "artisticSoul",
    fullName: "Ananya Singh",
    mediaUploadedCount: 60,
    followersCount: 6000,
    followingCount: 300,
    coverPhoto: "https://images.unsplash.com/photo-1684001162075-54901abdaa25?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Photographer capturing moments that tell captivating stories.",
    username: "lensMaster",
    fullName: "Kabir Das",
    mediaUploadedCount: 200,
    followersCount: 15000,
    followingCount: 400,
    coverPhoto: "https://images.unsplash.com/photo-1680539593018-1bab59cafc8f?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    profilePhoto: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bookworm sharing reviews and literary adventures online.",
    username: "readersHaven",
    fullName: "Priya Kapoor",
    mediaUploadedCount: 40,
    followersCount: 3000,
    followingCount: 150,
    coverPhoto: "https://images.unsplash.com/photo-1695311510443-a616195bec72?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];
  
// //   console.log(data);

var sum = '';


  users.forEach((elem, index) => {
    sum += `
      <div class="card">
    <div class="ud">
      <img src=${elem.coverPhoto} alt="">
    </div>
    <div class="lr">
      <img src=${elem.profilePhoto} alt="">
    </div>
    <h1>${elem.username}</h1>
    <p class="pp">${elem.fullName}</p>
    <div class="para">
        <p>${elem.description}</p>
    </div>
    <div class="btm">
      <div class="fc">
        <h1>${elem.mediaUploadedCount}</h1>
        <p>media</p>
      </div>
      <div class="fc">
        <h1>${elem.followersCount}</h1>
        <p>followers</p>
      </div>
      <div class="fc">
        <h1>${elem.followingCount}</h1>
        <p>followind</p>
      </div>
    </div> 
  </div>

    `
  })

  var body = document.querySelector('body');

  body.innerHTML = sum;












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



















