console.log("File is loaded on to clent side");

const weatherForm = document.querySelector("form");
const messageOne = document.querySelector(".status")
const usrInp = document.querySelector("#searchLocation");

const searchLocation = (name) => {
	fetch(`http://127.0.0.1:3000/weather?location=${name}`)
		.then((res) => {
			res.json().then((data) => {
                // console.log(data)
				if (!data.status) {
                    messageOne.textContent = data.message
					return console.log(data.message);
				}
                messageOne.textContent = data.current.temperature
				return console.log(data);
			});
		})
		.catch((err) => console.log("Error catch"));
};


messageOne.textContent = ""

weatherForm.addEventListener("submit", (e) => {
	e.preventDefault();
    messageOne.textContent = "Loading..."
	// console.log(usrInp.value);
    if(!usrInp.value){
        return console.log("Empty string")
        
    }
    return searchLocation(usrInp.value)
	// console.log("Loading");
	// console.log("Submit");
});
