const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcom to the home page!");
});

console.log(`---------> PORT: ${process.env.port}`);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Your server is running on: ${PORT}`);
});
