const express = require("express");
const { getAllTrails } = require("../queries/trails");

const trails = express.Router();

trails.get("/", async (req, res) => {
    try {
        const allTrails = await getAllTrails();
        if (allTrails.features && allTrails.features.length > 0) {
            res.status(200).json(allTrails)
        } else {
            res.status(404).json({ success: false, data: { error: "No Trails Found" } })
        }
    } catch (error) {
        console.error(error)
        throw error
    }
})

module.exports = trails;