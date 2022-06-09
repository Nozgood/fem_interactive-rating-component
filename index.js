const button = document.getElementById('button__submit');
const form = document.getElementsByClassName('container__form');

const allInputs = document.querySelectorAll('input');

let ratingValue;
let trueValue;

allInputs.forEach((a) => {
    a.addEventListener('click', ()=> {
        trueValue = ratingValue;
        console.log(trueValue);
        ratingValue = parseInt(a.value);
    })
});

button.addEventListener('click', function(event) { 
    event.preventDefault();
    window.open('thanks.html' + '?value=' + trueValue);
})