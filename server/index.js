const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
require('dotenv').config();
require('./db/mongoose');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.send({ message: "Hello from server!" });
});



const suggestion_router = require('./src/routes/suggestion');

app.use(cors())
app.use(suggestion_router);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});