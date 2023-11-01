const inputVal = document.querySelector('#name-input');
const outputVal = document.querySelector('#name-output');

inputVal.addEventListener("input", (event) =>{
    const evCurrentValue = event.currentTarget.value;
    if (evCurrentValue === ""){
        outputVal.textContent = "Anonimous"

    }else {
        outputVal.textContent = evCurrentValue;

    }
})
