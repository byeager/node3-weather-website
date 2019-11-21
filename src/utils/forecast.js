const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e3f1b278c3d7a72c56ef76860a1bdbbf/' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined) 
        } else if (body.error) {
            callback('Unable to find location.  Try another search', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' +
            body.currently.temperature + ' degrees out with a ' +
            body.currently.precipProbability + '% chance of rain. Have a nice day')
                
        }
    
    })

}
 
module.exports = forecast