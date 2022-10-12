const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcom to the home page!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`🚀 Your server is running on: ${port}`);
});
