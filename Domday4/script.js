const main = document.querySelector(".main");
const c = document.querySelector(".child");
const btn = document.querySelector(".btn");
const c1 = document.querySelector(".child1");
const c2 = document.querySelector(".child2");
const c3 = document.querySelector(".child3");
const c4 = document.querySelector(".child4");
const c5 = document.querySelector(".child5");
const c6 = document.querySelector(".child6");
const c7 = document.querySelector(".child7");
const c8 = document.querySelector(".child8");
const c9 = document.querySelector(".child9");
const c10 = document.querySelector(".child10");
const c11 = document.querySelector(".child11");
const c12 = document.querySelector(".child12");
const c13 = document.querySelector(".child13");
const c14 = document.querySelector(".child14");
const c15 = document.querySelector(".child15");
const c16 = document.querySelector(".child16");
const c17 = document.querySelector(".child17");
const c18 = document.querySelector(".child18");
const c19 = document.querySelector(".child19");
const c20 = document.querySelector(".child20");
const c21 = document.querySelector(".child21");
const c22 = document.querySelector(".child22");
const c23 = document.querySelector(".child23");
const c24 = document.querySelector(".child24");
const c25 = document.querySelector(".child25");
const c26 = document.querySelector(".child26");
const c27 = document.querySelector(".child27");
const c28 = document.querySelector(".child28");
const c29 = document.querySelector(".child29");
const c30 = document.querySelector(".child30");
const c31 = document.querySelector(".child31");
const c32 = document.querySelector(".child32");
const c33 = document.querySelector(".child33");
const c34 = document.querySelector(".child34");
const c35 = document.querySelector(".child35");
const c36 = document.querySelector(".child36");
const c37 = document.querySelector(".child37");
const c38 = document.querySelector(".child38");
const c39 = document.querySelector(".child39");
const c40 = document.querySelector(".child40");
const c41 = document.querySelector(".child41");
const c42 = document.querySelector(".child42");
const c43 = document.querySelector(".child43");
const c44 = document.querySelector(".child44");
const c45 = document.querySelector(".child45");
const c46 = document.querySelector(".child46");
const c47 = document.querySelector(".child47");
const c48 = document.querySelector(".child48");
const c49 = document.querySelector(".child49");
const c50 = document.querySelector(".child50");
const c51 = document.querySelector(".child51");
const c52 = document.querySelector(".child52");
const c53 = document.querySelector(".child53");
const c54 = document.querySelector(".child54");
const c55 = document.querySelector(".child55");
const c56 = document.querySelector(".child56");
const c57 = document.querySelector(".child57");
const c58 = document.querySelector(".child58");
const c59 = document.querySelector(".child59");
const c60 = document.querySelector(".child60");
const c61 = document.querySelector(".child61");
const c62 = document.querySelector(".child62");
const c63 = document.querySelector(".child63");
const c64 = document.querySelector(".child64");
const c65 = document.querySelector(".child65");
const c66 = document.querySelector(".child66");
const c67 = document.querySelector(".child67");
const c68 = document.querySelector(".child68");
const c69 = document.querySelector(".child69");
const c70 = document.querySelector(".child70");
const c71 = document.querySelector(".child71");
const c72 = document.querySelector(".child72");
const c73 = document.querySelector(".child73");
const c74 = document.querySelector(".child74");
const c75 = document.querySelector(".child75");
const c76 = document.querySelector(".child76");
const c77 = document.querySelector(".child77");
const c78 = document.querySelector(".child78");
const c79 = document.querySelector(".child79");
const c80 = document.querySelector(".child80");
const c81 = document.querySelector(".child81");
const c82 = document.querySelector(".child82");
const c83 = document.querySelector(".child83");

const body = document.querySelector("body");



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

const elements = [body ,c, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54, c55, c56, c57, c58, c59, c60, c61, c62, c63, c64, c65, c66, c67, c68, c69, c70, c71, c72, c73, c74, c75, c76, c77, c78, c79, c80, c81, c82, c83];

function changeColors() {
    elements.forEach(element => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255); 
        const b = Math.floor(Math.random() * 255);
        const border = Math.floor(Math.random() *50);
        // const h = Math.floor(Math.random() *100);
        // const w = Math.floor(Math.random() *100);
        element.style.transition = "background-color 0.5s ease";
        element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        element.style.borderRadius = `${border}px`;
        // element.style.height = `${h}px`;
        // element.style.width = `${w}px`;
    });
}

// Run immediately and then every 500ms
changeColors();
setInterval(changeColors, 700);

// Example of selecting multiple elements by ID
// const multipleElements = document.querySelectorAll("#id1, #id2, #id3");

// Example of selecting by multiple classes (like we did above)
// const multipleClasses = document.querySelectorAll(".child, .child1, .child2");

// Example using getElementById for multiple elements
// const element1 = document.getElementById("id1");
// const element2 = document.getElementById("id2");
// const elements = [element1, element2];

// You can also use a comma-separated list of selectors:
// const mixed = document.querySelectorAll("#id1, .class1, [data-attribute]");

// Note: querySelectorAll returns a NodeList of all matching elements
// This is similar to how we selected multiple classes above with the elements array


// // Math.floor() rounds a number DOWN to the nearest integer
// let floorExample = Math.floor(5.7);  // Returns 5
// let floorNegative = Math.floor(-5.7); // Returns -6

// // Math.ceil() rounds a number UP to the nearest integer
// let ceilExample = Math.ceil(5.1);    // Returns 6
// let ceilNegative = Math.ceil(-5.1);  // Returns -5

// console.log("Math.floor(5.7) =", floorExample);
// console.log("Math.floor(-5.7) =", floorNegative);
// console.log("Math.ceil(5.1) =", ceilExample); 
// console.log("Math.ceil(-5.1) =", ceilNegative);
