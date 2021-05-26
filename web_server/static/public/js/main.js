console.log("File is loaded on to clent side");

const weatherForm = document.querySelector('form')


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log("Submit")})