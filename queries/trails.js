require("dotenv").config()

const apiURL = process.env.NYC_TRAILS_ENDPOINT
const apiToken = process.env.NYC_TRAILS_APP_TOKEN

const getAllTrails = async () => {
    try {
        const allTrails = await fetch(apiURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-App-Token': apiToken
            }
        });
        const data = await allTrails.json()
        return data
    } catch (error) {
        console.error(error);
        throw error
    }
}

module.exports = {
    getAllTrails
};