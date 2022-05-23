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
})