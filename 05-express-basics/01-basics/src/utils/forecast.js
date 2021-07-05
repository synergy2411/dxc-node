const axios = require("axios").default;

const getForecast = (lat, lng) => {
    return new Promise((resolve, reject) => {
    axios.get(`https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`)
        .then(response => {
            const {temperature, summary} = response.data.currently
            resolve({ temperature, summary })
        }).catch(err => reject(err))
    })
}

module.exports = { getForecast }

// getForecast("77.21667","28.66667");