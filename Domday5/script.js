const main = document.querySelector(".main");
const c = document.querySelector(".child");
const btn = document.querySelector(".btn");

const animeImages = [
    {
        hero: 'https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg',  // Naruto
        scene: 'https://i.pinimg.com/736x/e8/40/80/e8408023eb383ee46bae9284b639df44.jpg'  // Konoha village main
    },
    {
        hero: 'https://imgcdn.stablediffusionweb.com/2024/9/6/9159e0e5-f4db-439f-a9f1-ebe55de6ec50.jpg',  // Goku
        scene: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/one-piece-crew-featured.png'  // Dragon Ball landscape
    },
    {
        hero: 'https://pbs.twimg.com/profile_images/1819726682690859008/5p_ElaV4_400x400.jpg',  // Tanjiro
        scene: 'https://static.toiimg.com/thumb/msid-108824901,width-1070,height-580,imgsize-159786,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'  // Demon Slayer scene
    },
    {
        hero: 'https://m.media-amazon.com/images/M/MV5BZGY2ZTM2MWMtNzA2OS00ZjJlLWIwZTMtMDBhN2EwYjZjZjEyXkEyXkFqcGc@._V1_.jpg',  // Naruto
        scene: 'https://images.hindustantimes.com/img/2024/08/21/1600x900/chainsaw_man_1721784488142_1724221327497.png'  // Konoha village
    },
    {
        hero: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-poster/l/k/y/medium-asstore-red74q45-goku-super-saiyan-instinct-wall-poster-original-imahfqux3e9ayzdn.jpeg?q=90&crop=false',  // Goku
        scene: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeyaKKlJYCHemxSqohH6YNbrzVEX4Q7_4xQ&s'  // Dragon Ball landscape
    },
    {
        hero: 'https://upload.wikimedia.org/wikipedia/en/8/8a/AstaWSJIssue362015.png',  // Tanjiro
        scene: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl57SkBQb4lURyNtWrN4zVIMdcYXuqL-T8gVozks83SgXKKVf_g2RMoVCsahXem9pyUnI&usqp=CAU'  // Demon Slayer scene
    }
];

let currentIndex = 0;

btn.addEventListener("click", () => {
    // Update the index (loop back to 0 if reached end)
    currentIndex = (currentIndex + 1) % animeImages.length;
    
    // Get current image set
    const currentImages = animeImages[currentIndex];
    
    // Change main background
    main.style.backgroundImage = `url('${currentImages.scene}')`;
    main.style.backgroundSize = 'cover';
    main.style.backgroundPosition = 'center';
    
    // Change child div background and flip it
    c.style.backgroundImage = `url('${currentImages.hero}')`;
    c.style.backgroundSize = 'cover';
    c.style.backgroundPosition = 'center';
    c.style.transform = 'scaleX(-1)'; // Flip horizontally
    
    // Add smooth transition for the flip
    c.style.transition = 'transform 0.3s ease-in-out';
});







// main.addEventListener("click", () => {
//         const elements = [c, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54, c55, c56, c57, c58, c59, c60, c61, c62, c63, c64, c65, c66, c67, c68, c69, c70, c71, c72, c73, c74, c75, c76, c77, c78, c79, c80, c81, c82, c83];
        
//         elements.forEach(element => {
//             const r = Math.floor(Math.random() * 255);
//             const g = Math.floor(Math.random() * 255); 
//             const b = Math.floor(Math.random() * 255);
//             element.style.transition = "background-color 0.5s ease";
//             element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//         });
// });
