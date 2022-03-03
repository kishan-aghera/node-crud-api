// Importing data from .env file.
require('dotenv').config();

// Let's add Express and Mongoose.
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

// The database to use when authenticating with user and pass. In MongoDB, users are scoped to a database.
const authenticationDatabaseName = process.env.AUTHENTICATION_DATABASE_NAME;

// Let's connect the database to our server using Mongoose.
const options = {
  authSource: authenticationDatabaseName
}
mongoose.connect(mongoString, options);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

// Transfer the contents of Express into a new constant called app
const app = express();

// Let's listen the changes of this file on port 3000.
app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
