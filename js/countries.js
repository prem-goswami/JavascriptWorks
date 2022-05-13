let countryElement = document.getElementById('country')
let citiesElement = document.getElementById('cities')
let citiesOption = document.getElementById('citiesOption')


window.onload = getCountryData(), getCitiesData()

function getCitiesData() {

    let intialValue = {
        "country": "Afghanistan"
    }

    let options = {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(intialValue)
    }

    let url = 'https://countriesnow.space/api/v0.1/countries/cities'

    fetch(url, options)

        .then(function (response) {
            return response.json()
        })

        .then(function (jsonData) {
            let cities_data = jsonData.data
            displayCitiesOptions(cities_data)
        })
}

function displayCountryOptions(fetchedData) {
    for (i in fetchedData) {
        let optionsContainer = document.createElement("Option")
        optionsContainer.innerHTML = fetchedData[i].country
        countryElement.appendChild(optionsContainer)
    }
}

function getCountryData() {
    let url = 'https://countriesnow.space/api/v0.1/countries';
    let options = {
        method: 'GET'
    };

    fetch(url, options)
        .then(function (response) {
            return response.json()
        })
        .then(function (jsonData) {
            let data_Fetched = jsonData.data
            displayCountryOptions(data_Fetched)
        })
}

function displayCitiesOptions(citiesData) {
    citiesElement.innerHTML = ''
    for(i in citiesData){
        console.log(citiesData[i])
        let optionsContainer = document.createElement('Option')
        optionsContainer.innerHTML = citiesData[i]
        citiesElement.appendChild(optionsContainer)
    }
}

countryElement.addEventListener('change', function () {
    let countryValue = {
        "country" : ''
    }

    countryValue.country = countryElement.value
    console.log(countryValue)

    let options = {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(countryValue)
    }

    let url = 'https://countriesnow.space/api/v0.1/countries/cities'

    fetch(url, options)

        .then(function (response) {
            return response.json()
        })

        .then(function (jsonData) {
            let cities_data = jsonData.data
            displayCitiesOptions(cities_data)
        })
})

