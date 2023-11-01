const inputText = document.querySelector('#validation-input')

inputText.addEventListener('blur', () =>{
    if (inputText.value.length === 6){
        inputText.classList.add('valid')
        inputText.classList.remove('invalid')
    } else {
        inputText.classList.remove('valid')
        inputText.classList.add('invalid')  
    }
})
