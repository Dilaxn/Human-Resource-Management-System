const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
require('dotenv').config();
require('./db/mongoose');

app.get("/api", (req, res) => {
    res.send({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});