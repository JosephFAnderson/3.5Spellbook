const express = require('express');
const db = require('./config/connection');
const Model = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Prepping spells at ${PORT}`)
    })
})