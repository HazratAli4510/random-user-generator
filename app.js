//Fetch Information by API
const loadData = async () => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    displayData(data.results[0])
    displayDate(data.results[0])
    emailIcon(data.results[0])
    userIcon(data.results[0])
    addressIcon(data.results[0])
    phoneIcon(data.results[0])
    passwordIcon(data.results[0])
}
//Call the Function
loadData()
//Display API data
const displayData = (data) => {
    //get and update image
    const img = document.querySelector('img')
    img.src = data.picture.large
    //get and update name
    const profileName = document.querySelector('.name h1')
    profileName.innerText =data.name.title + ' ' + data.name.first + ' ' + data.name.last
}




// Mouse Enter in user Icon
function userIcon(data) {
    document.getElementById('loader').style.display = 'none'
    document.getElementById('user').addEventListener('mouseenter', function () {
        document.getElementById('title').innerText = 'My name is:'
        document.querySelector('.name h1').innerText = data.name.title + ' ' + data.name.first + ' ' + data.name.last
    })
}


// Mouse Enter in Email Icon
function emailIcon(data) {
    document.getElementById('email').addEventListener('mouseenter', function () {
        document.getElementById('title').innerText = 'My email Is:'
        document.querySelector('.name h1').innerText = data.email
    })
}


// Mouse Enter in Birthdate Icon
 function displayDate(data) {
    document.getElementById('birthday').addEventListener('mouseenter', function () {
        document.getElementById('title').innerText = 'My Birth Date is:'
        document.querySelector('.name h1').innerText = data.dob.date.slice(0,10)
    })
}

// Mouse Enter in Address Icon
 function addressIcon(data) {
    document.getElementById('address').addEventListener('mouseenter', function () {
        document.getElementById('title').innerText = 'My address is:'
        document.querySelector('.name h1').innerText = data.location.city + ', ' + data.location.country
    })
}


// Mouse Enter in Phone Icon
 function phoneIcon(data) {
    document.getElementById('phone').addEventListener('mouseenter', function () {
        document.getElementById('title').innerText = 'My phone number is:'
        document.querySelector('.name h1').innerText = data.cell
    })
}




// Mouse Enter in Phone Icon
 function passwordIcon(data) {
    document.getElementById('password').addEventListener('mouseenter', function () {
        document.getElementById('title').innerText = 'My password is:'
        document.querySelector('.name h1').innerText = data.login.password
    })
} 
