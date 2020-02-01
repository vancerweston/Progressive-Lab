const myAge = 23;
const theirAgeElement = document.getElementById('yourAge');
const theirAge = +theirAgeElement.innerText;
const newSpan = document.createElement('span');
if (theirAge > myAge) {
    newSpan.innerText = ' is your age. You are older than me.'
} else if (theirAge < myAge) {
    newSpan.innerText = ' is your age. You are younger than me.'
} else if (theirAge === myAge) {
    newSpan.innerText = ' is your age. WE ARE THE SAME AGE!!!'
} else {
    newSpan.innerHTML = 'You did not enter a valid age. Please re-enter your age.'
}

theirAgeElement.insertAdjacentElement('afterend', newSpan);