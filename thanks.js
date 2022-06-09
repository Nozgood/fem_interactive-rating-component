const url = new URL(window.location.href);
const ratingValue = url.searchParams.get('value');

const divRating = document.getElementById('div-rating');
const textRating = document.createElement('p');
textRating.setAttribute('class', 'thanks__text-rating-text');
textRating.innerHTML = 'You selected ' + ratingValue + ' out of 5';

divRating.appendChild(textRating);