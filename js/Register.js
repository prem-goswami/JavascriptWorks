let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let numberInput = document.getElementById('number')
let stateInput = document.getElementById('state')
let city = document.getElementById('city')
let pincodeInput = document.getElementById('pinCode')
let addressInput = document.getElementById('address')
let dobInput = document.getElementById('dob')
let genderInput = document.getElementById('gender')
let panInput = document.getElementById('panCard')

function onSubmit() {
    validateName()
    validateEmail()
    validateNumber()
    validatePinCode()
    validateAddress()
    validateDob()
    validatePan()
}


function validateName() {
    let nameForamt = /[a-zA-Z]+/;
    if (nameInput.value.match(nameForamt)) {
        nameInput.classList.add('correct')
        nameInput.classList.remove('incorrect')
    }
    else {
        nameInput.classList.add('incorrect')
    }
}

function validateEmail() {
    let emailFormat = "^([a-zA-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-zA-z]{2,8}?)$";
    if (emailInput.value.match(emailFormat)) {
        emailInput.classList.add('correct')
        emailInput.classList.remove('incorrect')
    }
    else {
        emailInput.classList.add('incorrect')
    }

}

function validateNumber() {
    let numberFormat = "^([6-9][0-9]{9})$";
    if (numberInput.value.match(numberFormat)) {
        numberInput.classList.add('correct')
        numberInput.classList.remove('incorrect')
    }
    else {
        numberInput.classList.add('incorrect')
    }
}

function validatePinCode() {
    let pinFormat = "^[0-9]{6}$"
    if (pincodeInput.value.match(pinFormat)) {
        console.log('co')
        pincodeInput.classList.add('correct')
        pincodeInput.classList.remove('incorrect')
    }
    else {
        console.log('inc')
        pincodeInput.classList.add('incorrect')
    }
}

function validateAddress() {
    if (addressInput.value !== '') {
        addressInput.classList.add('correct')
        addressInput.classList.remove('incorrect')
    }
    else {
        addressInput.classList.add('incorrect')
    }
}

function validateDob() {
    if (dobInput.value !== '') {
        dobInput.classList.add('correct')
        dobInput.classList.remove('incorrect')
    }
    else {
        dobInput.classList.add('incorrect')
    }
}

function validatePan() {
    let panFormat = "/^[A-Za-z]{5}[0-9]{4}[a-zA-Z]$/"
    if (panInput.value !== '') {
        panInput.classList.add('correct')
        panInput.classList.remove('incorrect')
    }
    else {
        panInput.classList.add('incorrect')
    }
}