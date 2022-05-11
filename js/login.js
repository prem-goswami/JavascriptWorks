let emailInput = document.getElementById('floatingInput')
let passwordInput = document.getElementById('floatingPassword')
let errorElement = document.getElementById('errorMsg')
let errorElementPswd = document.getElementById('errorMsg1')

function submitForm() {
    if(emailInput.value == '') {
        emailInput.classList.add('incorrect')
        errorElement.textContent = '*Required Email Field'
        errorElement.classList.add('errorMsg')

    }
    else{
        validateEmail()
    }

    if( passwordInput.value == '') {
        console.log('i')
        passwordInput.classList.add('incorrect')
        errorElementPswd.textContent = '*Required Password Field'
        errorElementPswd.classList.add('errorMsg')
    }
    else if(passwordInput.value !== ' ') {
        validatePswd()
    }
}

function validateEmail() {
    console.log('validateEmail')
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(emailInput.value.match(emailFormat)){
        console.log('correct')
        emailInput.classList.add('correct')
        emailInput.classList.remove('incorrect')
        errorElement.textContent = ''
    }
    else {
        console.log('incorrect')
        emailInput.classList.add('incorrect')
    }
}

function validatePswd() {
    console.log('validatePswd')
    let pswdFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if(passwordInput.value.match(pswdFormat)) {
        console.log('cpswd')
        passwordInput.classList.add('correct')
        passwordInput.classList.remove('incorrect')
        errorElementPswd.textContent = ''
    }
    else {
        console.log('ipswd')
        passwordInput.classList.add('incorrect')
    }
}