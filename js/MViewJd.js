let reqid = window.location.search.substr(1);

let clientName = document.getElementById('clientName1')
let clientLocation = document.getElementById('clientLocation')
let jobTitle = document.getElementById('jobTitle')
let asigneeText = document.getElementById('asigneeText')
let statusText = document.getElementById('statusText')
let joiningDateText = document.getElementById('joiningDateText')
let expiredText = document.getElementById('expiredText')
let positonText = document.getElementById('positonText')
let offeredText = document.getElementById('offeredText')
let experienceText = document.getElementById('experienceText')
let ctcText = document.getElementById('ctcText')
let joiningText = document.getElementById('joiningText')
let expireText = document.getElementById('expireText')
let placementText = document.getElementById('placementText')
let clientText = document.getElementById('clientText')
let siteText = document.getElementById('siteText')
let contactText = document.getElementById('contactText')

let url = `http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/job_detail?job_id=${reqid}`
let  options = {
    method : 'GET',
    header : {
        "Content-Type":'application/json'
    }
}

fetch(url, options)

.then(response => response.json())

.then(data => {
    console.log(data)
    jobTitle.textContent = data.description
    clientName.textContent = data.client.name
    clientLocation.textContent = data.location
    asigneeText.textContent = "S"
    statusText.textContent = data.status
    joiningDateText.textContent = data.joining_date
    expiredText.textContent = data.expiry_date
    positonText.textContent = data.total_requirement
    offeredText.textContent = data.hired_positions
    experienceText.textContent= data.experience_range + " Years"
    ctcText.textContent = data.salary_range + " CTC"
    joiningText.textContent = data.joining_date
    expireText.textContent = data.expiry_date
    placementText.textContent = data.total_requirement
    clientText.textContent = data.client.name
    siteText.textContent = data.location
    managerText.textContent = data.hiring_manager.name
    contactText.textContent = data.hiring_manager.phone
})