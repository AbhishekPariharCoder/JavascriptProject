
const circle = document.querySelector('.circle');
const on = document.querySelector('.on');
const off = document.querySelector('.off');
const toggle = document.querySelector('.toggle');


let flag = false;


on.addEventListener('click', () => {
  circle.style.backgroundColor='yellow';
  flag = false;
});

off.addEventListener('click', () => {
    circle.style.backgroundColor='black';
    flag = true;
  });
  

  toggle.addEventListener('click', () => {
    if(flag==false){
        circle.style.backgroundColor='black';
        flag = true;
    }else{
        circle.style.backgroundColor='yellow';
        flag = false;
    }
  });



// types of addeventlistener

// 1. click
document.addEventListener('click', function() {
    // Triggered when element is clicked
});

// 2. dblclick 
document.addEventListener('dblclick', function() {
    // Triggered on double click
});

// 3. mouseenter
document.addEventListener('mouseenter', function() {
    // Triggered when mouse enters element
});

// 4. mouseleave 
document.addEventListener('mouseleave', function() {
    // Triggered when mouse leaves element
});

// 5. mousemove
document.addEventListener('mousemove', function() {
    // Triggered when mouse moves over element
});

// 6. keydown
document.addEventListener('keydown', function() {
    // Triggered when key is pressed down
});

// 7. keyup
document.addEventListener('keyup', function() {
    // Triggered when key is released
});

// 8. submit
document.addEventListener('submit', function() {
    // Triggered when form is submitted
});

// 9. change
document.addEventListener('change', function() {
    // Triggered when input value changes
});

// 10. focus
document.addEventListener('focus', function() {
    // Triggered when element receives focus
});

// 11. blur
document.addEventListener('blur', function() {
    // Triggered when element loses focus
});

// 12. load
window.addEventListener('load', function() {
    // Triggered when page finishes loading
});

// 13. resize
window.addEventListener('resize', function() {
    // Triggered when window is resized
});

// 14. scroll
window.addEventListener('scroll', function() {
    // Triggered when page is scrolled
});

































// const h1 = document.querySelector('h1');
// const h2 = document.querySelector('h2');

// h1.innerHTML = '<i>hi</i>';

// h2.textContent = '<i>hi</i>';