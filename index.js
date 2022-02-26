// Let's add Express and Mongoose.
const express = require('express');
const mongoose = require('mongoose');

// Transfer the contents of Express into a new constant called app
const app = express();

// Let's listen the changes of this file on port 3000.
app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
