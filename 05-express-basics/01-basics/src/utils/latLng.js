const axios = require("axios").default;


const getLatLng = location => {
    return new Promise((resolve, reject) => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ`)
        .then(response => {
            const [lat, lng] = response.data.features[0].geometry.coordinates;
            const placeName = response.data.features[0].place_name;
            resolve({ lat, lng, placeName })
        }).catch(err => reject(err));
    })
}

module.exports = { getLatLng }

// getLatLng("pune");