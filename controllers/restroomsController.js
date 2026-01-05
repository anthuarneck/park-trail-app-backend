const express = require("express");
const { getAllRestrooms } = require("../queries/restrooms");

const restrooms = express.Router();

restrooms.get("/", async (req, res) => {
  try {
    const allRestrooms = await getAllRestrooms();
    if (allRestrooms && allRestrooms.length > 0) {
      res.status(200).json(allRestrooms);
    } else {
      res
        .status(400)
        .json({ success: false, data: { error: "No Restrooms Found" } });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
});

module.exports = restrooms;
