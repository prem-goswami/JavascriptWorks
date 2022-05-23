let access = localStorage.getItem('token')

if(access === null) {
    window.location.href = "ProjectMLogin.html"
}


let clientElement = document.getElementById('clientName')
let locationElement = document.getElementById("locationName")


window.onload = getClientData()

function goToJobs() {
    window.location.href = "MDashboard.html"
}


function goToDescription() {
    window.location.href = "MAddJob.html"
}

clientElement.addEventListener('change', function () {
    client_id = parseInt(clientElement.value)
    console.log(clientElement.value)
    locationElement.innerHTML = ''
    let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/client"
    let options = {
        method: 'GET',
        header: {
            'Content-Type': 'application.json'
        }
    }
    fetch(url, options)
        .then(response => response.json())
        .then(function (data) {
            for (i in data) {
                if (data[i].id == client_id) {
                    let locationOptions = document.createElement("option")
                    locationOptions.innerHTML = data[i].city
                    locationOptions.value = data[i].city
                    locationElement.appendChild(locationOptions)
                }
            }
        })
    console.log(locationElement.value)
})


function displayClientOptions(data) {
    for (i in data) {
        let clientOptions = document.createElement('option')
        clientOptions.value = data[i].id
        clientOptions.innerHTML = data[i].name
        clientElement.appendChild(clientOptions)
    }
}

function getClientData() {
    let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/client"
    let options = {
        method: 'GET',
        header: {
            'Content-Type': 'application.json'
        }
    }
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            displayClientOptions(data)
        })
}

function submitManagerData() {

    let hmName = document.getElementById('hmName').value
    let hmPhone = document.getElementById('mobile').value
    let hmEmail = document.getElementById('email').value
    let clientId = clientElement.value

    data = {
        cell: hmPhone,
        client_id: clientId,
        email: hmEmail,
        name: hmName,
        phone: hmPhone,
    }

    let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/hiringmanager"
    let options = {
        method : 'POST',
        header : {
            'Content-Type' : "application/json"
        },
        body : JSON.stringify(data)
    }

    fetch(url, options) 

    .then(response => response.json())

    ,then(data => console.log(data))

}