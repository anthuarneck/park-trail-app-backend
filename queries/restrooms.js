require("dotenv").config();

const apiUrl = process.env.NYC_PARK_RESTROOMS_ENDPOINT;
const apiToken = process.env.NYC_TRAILS_APP_TOKEN;

const getAllRestrooms = async () => {
  try {
    const allRestrooms = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-App-Token': apiToken,
      },
    });
    const data = await allRestrooms.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getAllRestrooms,
};
