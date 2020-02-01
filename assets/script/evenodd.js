const numberElement = document.getElementById('number');
const isEven =  parseInt(numberElement.innerText, 10) % 2 === 0;
const newElement = document.createElement('span');

if (isEven) {
    newElement.innerText = ' Is Even';
} else {
    newElement.innerText = ' Is Odd';
}

numberElement.insertAdjacentElement('afterend', newElement)