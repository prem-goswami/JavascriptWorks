let access = localStorage.getItem('token')

if(access === null) {
    window.location.href = "ProjectMLogin.html"
}

function goToJobs() {
    window.location.href = "MDashboard.html"
}

function goToDescription() {
    window.location.href = "MAddJob.html"
}

function submitClientData() {

  var client_name = document.getElementById("name").value;
  var client_city = document.getElementById("site").value;
  var client_num = document.getElementById("number").value;
  var client_ext = document.getElementById("extn").value;
  var client_address = document.getElementById("address").value;
  var client_website = document.getElementById("email").value;

  let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/client";

  data = {
    address: [client_address],
    city: [client_city],
    name: client_name,
    phone: client_num,
    website: client_website,
    ext: client_ext,
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
    .then(data => {
        if(data.status == 'A'){
            window.location.href = 'MAddJob.html'
        }
    })
    
    
    /*let nameRegex = /^[a-zA-Z]{4,10}$/;
    if (nameText.value.match(nameRegex)) {
        let client_name = nameText.value
        nameText.classList.remove('wrong')
    }
    else {
        nameText.classList.add("wrong")
    }
    let siteText = document.getElementById('site')
    if (siteText.value !== '') {
        let sitevalues = siteText.value
        addClientData.city = sitevalues.split(',')
        siteText.classList.remove('wrong')
    }
    else {
        siteText.classList.add("wrong")
    }

    let contactNumber = document.getElementById('number')
    let numberRegex = /^[0-9]{10}$/
    if (contactNumber.value.match(numberRegex)) {
        addClientData.phone = contactNumber.value
    } else {
        contactNumber.classList.add('wrong')
    }

    let extnText = document.getElementById('extn')
    let extnRegex = /^[0-9]{2,3}$/
    if (!extnText.value.match(extnRegex)) {
        extnText.classList.add('wrong')
    }else {
        addClientData.ext = extnText.value
    }

    let addressText = document.getElementById('address')
    if (addressText.value !== '') {
        addClientData.address = [addressText.value]
    }

    let websiteText = document.getElementById('email')
    let websiteRegex = /^[a-zA-Z0-9\.-]+@[a-zA-Z]+.[a-z]{2,6}$/
    if(websiteText.value.match(websiteRegex)){
        addClientData.website = websiteText.value
    }
    else {
        websiteText.classList.add('wrong')
    } */
}