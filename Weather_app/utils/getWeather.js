const request = require('postman-request')
// const getWeather = require('./getWeather')

const getWeather = ({longNlatt}, cb) => {
	const url_access_key = "db83186412c5adec5a422f55b32ea9b6";
    longNlatt.reverse()
	const url = `http://api.weatherstack.com/current?access_key=${url_access_key}&query=${longNlatt}`;
    console.log(url)
    let message = "";
    request({url, json:true}, (err, res)=>{
        if (err){
            message = 'some err '
            return cb(message, undefined)
        }else if(res.body.success === false){
            console.log(res.body)
            message = "Provided location not valid"
            return cb(message, undefined)
        }
        const data = res.body
        return cb(message, data)
    })
};

module.exports = getWeather