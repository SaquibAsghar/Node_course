console.log("File is loaded on to clent side");

fetch(`http://127.0.0.1:3000/weather?location=Bost!n`)
.then(res => {
    res.json().then(data => {
        if (!data.status) {

            return console.log(data.message, data.statusCode)
        }

        return console.log(data)
    })
}).catch(err =>console.log("Error catch"))

const weatherForm = document.querySelector('form')


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log("Submit")})