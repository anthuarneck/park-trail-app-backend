const express = require("express");
const { getCurrentWeatherNYC } = require("../queries/weather");

const weather = express.Router();

weather.get("/", async (req, res) => {
    try {
        const nycWeather = await getCurrentWeatherNYC();
        if (nycWeather) {
            res.status(200).json(nycWeather)
        } else {
            res.status(404).json({ success: false, data: { error: "Weather Not Found" } })
        }
    } catch (error) {
        console.error(error);
        throw error
    }
})

module.exports = weather;