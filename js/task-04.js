let currentValue = 0;

const finishValue = document.querySelector('#value')
const decrementButton = document.querySelector('#counter button[data-action="decrement"]');
const incrementButton = document.querySelector('#counter button[data-action="increment"]');

decrementButton.addEventListener ("click", () =>{
    currentValue -= 1;
    finishValue.textContent = `${currentValue}`
})

incrementButton.addEventListener ("click", () =>{
    currentValue += 1;
    finishValue.textContent = `${currentValue}`
})

