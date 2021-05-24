const request = require('postman-request')

const access_key = 'db83186412c5adec5a422f55b32ea9b6'

let loc = 'New Delhi'

const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${loc}`

request({url, json:true}, (err, res)=>{
    const data = res.body
    // console.log('body =>', data)
    // console.log(data.current)

    console.log(`Weather: ${data.current.weather_descriptions[0]}. Currently it is ${data.current.temperature} C degree. It feels liks ${data.current.feelslike} C degree.`)
})