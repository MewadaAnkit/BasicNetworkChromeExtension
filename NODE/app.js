const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(cors());

// Route to calculate network speed
app.get("/api/network-speed", async (req, res) => {
  try {
    const fileUrl = "https://img.freepik.com/free-vector/colorful-modern-diwali-design_1394-1177.jpg?semt=ais_hybrid"; // Large file for testing (or replace with your own)
    const startTime = Date.now();
    
    await axios.get(fileUrl, { responseType: "stream" });
    
    const endTime = Date.now();
    const fileSizeInBytes = 100 * 1024 * 1024; // 100 MB
    const durationInSeconds = (endTime - startTime) / 1000;
    const speedInMbps = ((fileSizeInBytes * 8) / (1024 * 1024)) / durationInSeconds;

    res.json({ speed: speedInMbps.toFixed(2) });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch network speed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
