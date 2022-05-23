let emailBox = document.getElementById('floatingInput')
let pswdBox = document.getElementById('floatingPassword')
let errorText = document.getElementById('error')
let errorTextPswd = document.getElementById('errorPswd')

function submitForm() {

    let emailText = emailBox.value
    let pswdText = pswdBox.value

    if (emailBox.value === '') {
        emailBox.classList.add("incorrect")
        errorText.style.display = "block"
    }
    if (pswdBox.value === '') {
        pswdBox.classList.add('incorrect')
        errorTextPswd.style.display = "block"
    }
    if(emailBox.value !== '' && pswdBox.value !== '') {
        errorTextPswd.style.display = "none"
        errorText.style.display = "none"

        const userDetails = {
            username: emailText,
            password: pswdText
        }

        let options = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(userDetails)
        }

        let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/login"

        fetch(url, options)

            .then(function (response) {
                console.log(userDetails)
                console.log(response)
                return response.json()
            })

            .then(function(jsonData) {
                console.log(jsonData.access_token)
                if(jsonData.msg === undefined){
                    localStorage.setItem("token", jsonData.access_token)
                }else {
                    emailBox.classList.add("incorrect")
                    pswdBox.classList.add('incorrect')
                }
            })
    }




    /* console.log(emailBox.value)
     if(emailBox.value === ''){
         emailBox.classList.add("incorrect")
         errorText.style.display = "block"
     }
     if(emailBox.value === "kiransaipalika@mobigesture.com" && pswdBox.value === 'kiran@123') {
         window.location.href = "ahGrid.html"
     }*/
}