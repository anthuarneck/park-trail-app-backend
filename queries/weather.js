require("dotenv").config()

const apiKey = process.env.WEATHER_API_KEY
const apiEndpoint = process.env.WEATHER_API_ENDPOINT

const getCurrentWeatherNYC = () => {
    return fetch(`${apiEndpoint}/current.json?key=${apiKey}&q=New York City&aqi=no`)
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch((error) => {
            console.error(error);
            throw error
        })
}

module.exports = {
    getCurrentWeatherNYC
};