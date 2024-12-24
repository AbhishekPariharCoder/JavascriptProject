let h1s = document.querySelectorAll('h1');
let body = document.querySelector('body');
h1s.forEach(function(h1) {
    h1.addEventListener('click', function() {
        body.style.backgroundColor = h1.innerHTML;
    });
});

let flag = 0;

h1s.forEach(function(h1) {
    h1.addEventListener('click', function() {
        if(flag==0){
            h1.style.color = h1.innerHTML;
            flag = 1;
        }else{
            h1.style.color = 'Black';
            body.style.backgroundColor = 'Black';
            flag = 0;
        }
    });
});


