const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcom to the home page!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Your server is running on: http://localhost:${PORT}`);
});
