let clientElement = document.getElementById('clientName')
let locationElement = document.getElementById('location')
let hiringmanagerElement = document.getElementById('hiringManager')
let positonsElement = document.getElementById("positions")

function addClientPage() {
    window.location.href = "MAddClient.html"
}
function addManagerPage() {
    window.location.href = "addManager.html"
}

function goToJobs() {
    window.location.href = 'MDashboard.html'
}

window.onload = getClientData(), getPositions()

function getPositions() {
    for (i = 1; i <= 100; i++) {
        let positonsOptions = document.createElement('option')
        positonsOptions.innerHTML = i
        positonsOptions.value = i
        positonsElement.appendChild(positonsOptions)
    }
}


clientElement.addEventListener('change', function () {
    client_id = parseInt(clientElement.value)
    console.log(clientElement.value)
    locationElement.innerHTML = ''
    hiringmanagerElement.innerHTML = ''
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

    let managerUrl = 'http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/hiringmanager'
    let managerOptions = {
        method: 'GET',
        header: {
            "Content-Type": "application.json"
        }
    }
    fetch(managerUrl, managerOptions)
        .then(response => response.json())
        .then(managerData => {
            for (i in managerData) {
                if (managerData[i].client_id == client_id) {
                    let managerOptions = document.createElement('option')
                    managerOptions.innerHTML = managerData[i].name
                    managerOptions.value = managerData[i].id
                    hiringmanagerElement.appendChild(managerOptions)
                }
            }
        })
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



function validateForm() {

    var title = document.getElementById("jobTitle").value;
    var description = CKEDITOR.instances["editor1"].getData();
    var clientid = clientElement.value;
    var city = locationElement.value;
    var hiringmanager = hiringmanagerElement.value;
    var technologies = document.getElementById("technologies").value;
    var arr = technologies.split(",");
    var joiningdate = document.getElementById("joiningDate").value;
    var expirydate = document.getElementById("expiryDate").value;
    var requirement = positonsElement.value;
    var salarymin = document.getElementById("minSalary").value;
    var salarymin = parseInt(salarymin, 10);
    var salarymax = document.getElementById("maxSalary").value;
    var salarymax = parseInt(salarymax, 10);
    var experiencemin = document.getElementById("minExp").value;
    var experiencemin = parseInt(experiencemin, 10);
    var experiencemax = document.getElementById("maxExp").value;
    var experiencemax = parseInt(experiencemax, 10);

    let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/create_jd";

    data = {
        client_id: clientid,
        description: description,
        experience_range: [experiencemin, experiencemax],
        expiry_date: expirydate,
        hiringmanager_id: hiringmanager,
        hrmanager_id: "0",
        id: 0,
        joining_date: joiningdate,
        location: city,
        salary_range: [salarymin, salarymax],
        technologies: arr,
        title: title,
        total_requirement: requirement,
    };
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    };
    console.log(data);
    fetch(url, options)

        .then(response => response.json())

        .then(function (jsonData) {
            if (jsonData.status === "Success") {
                window.location.href = "./Mdashboard.html";
            }
        })





    /*

    let title = document.getElementById('jobTitle').value
    let description = CKEDITOR.instances['editor1'].getData()
    var clientId = clientElement.value
    var clientId = parseInt(clientId,10)
    let locationVlaue = locationElement.value
    let managerId = hiringmanagerElement.value
    let tech = document.getElementById('technologies').value
    let techValues = tech.split(',')
    let joiningDate = document.getElementById("joiningDate").value
    let expiryDate = document.getElementById('expiryDate').value
    let positions = positonsElement.value
    var minS = document.getElementById('minSalary').value;
    var minS = parseInt(minS,10);
    var maxS = document.getElementById('maxSalary').value
    var maxS = parseInt(maxS,10)
    var minE = document.getElementById('minExp').value
    var minE = parseInt(minE,10)
    var maxE = document.getElementById('maxExp').value
    var maxE = parseInt(maxE,10)





    postData = {
        client_id: clientId,
        description : description,
        experience_range :[minE,maxE],
        expiry_date : expiryDate,
        hiringmanager_id : parseInt(managerId),
        hrmanager_id:3,
        id:0,
        joining_date : joiningDate,
        location : locationVlaue,
        salary_range : [minS,maxS],
        technologies : techValues,
        title: title,
        total_requirement : parseInt(positions)
    }
    console.log(typeof(postData.client_id))
    
    console.log(postData)

    let url = 'http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/create_jd'
    let options = {
        method : 'POST',
        header: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(postData)
    }

    fetch(url, options)

    .then(response => console.log(response))*/
}