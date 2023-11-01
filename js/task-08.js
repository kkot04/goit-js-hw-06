const form = document.querySelector('.login-form')

function getValueOfEmail(){
    const inputEmail = document.querySelector('[type="email"]')
    if(inputEmail.value !== ""){
        return inputEmail.value
    } else {
        return alert('Введіть Ваш email!')
    }

}

function getValueOfPassword(){
    const inputPassword = document.querySelector('[type="password"]')
    if(inputPassword.value !== ""){
        return inputPassword.value
    } else {
        return alert('Введіть Ваш пароль!')
    }

}

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const email = getValueOfEmail();
    const password =  getValueOfPassword();
    if (email && password){
        console.log({email, password});
    }
    form.reset()
} )
