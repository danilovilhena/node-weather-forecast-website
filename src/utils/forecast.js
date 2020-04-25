const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=21300db2744f261f24b310d03b5299a7&units=m&query=" + latitude + "," + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        }
        else if (body.error) {
            callback('Unable to find location.', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' celcius degrees out. It feels like ' + body.current.feelslike + ' celcius degrees out.')
        }
    })
}

module.exports = forecast