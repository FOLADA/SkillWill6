const button = document.querySelector('.button');
const input = document.querySelector('.input');
const div = document.querySelector('.div');

function Average() {
    const numberInput = input.value;
    const Narr = numberInput.split(':').map(Number);
    const sum = Narr.reduce((total, num) => total + num, 0);
    const average = sum / Narr.length;
    const resultDiv = document.createElement('div');
    resultDiv.textContent = `საშუალო არის ${average.toFixed()}`;
    div.appendChild(resultDiv);
}

button.addEventListener('click', Average);
