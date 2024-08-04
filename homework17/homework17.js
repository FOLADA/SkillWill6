const button = document.querySelector('.button')
const input = document.querySelector('.input')

function changeBgColor() {
    const colorInput = input.value.toLowerCase()
    const validColors = ['red', 'blue', 'green', 'black', 'white']
    if (validColors.includes(colorInput)) {
        document.body.style.backgroundColor = colorInput
    } else {
        alert('გთხოვთ შეიყვანოთ სხვა ფერი')
    }
}

button.addEventListener('click', changeBgColor)