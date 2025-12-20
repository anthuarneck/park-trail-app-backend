const express = require("express");
const cors = require("cors");
const app = express();

const trailsController = require("./controllers/trailsController");
const weatherController = require("./controllers/weatherController");

app.use(cors());
app.use(express.json());

app.use("/api/trails", trailsController);
app.use("/api/weather", weatherController)

app.get("/", (req, res) => {
    res.send("Welcome to Park Trails");
});

// app.get("*", (req, res) => {
//     res.status(404).json({ success: false, data: { error: "Page Not Found!" } });
// });

module.exports = app;