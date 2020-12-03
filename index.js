// const dotenv = require('dotenv');
// dotenv.config()

require('dotenv').config();
// You can import dotenv either way, but it always needs to be at the top. 

console.log("Hello!") // Always Sanity Check
console.log(__dirname) // Returns the name of the current directory. 
console.log(process.env.USERNAME) // Returns the name of the user (should be USER instead of USERNAME on non-Windows 10 systems.)
console.log(process.env.PORT) // Returns the current port. 
console.log(process.env.LADY) // All of these pull from the .env file. 
console.log(process.env.HAUNTED)

// process.env is an environment variable, specific to the local machine that it's running on. 
// Node programs have access to the vairables on the computer (run "env" in the terminal to see the full list.)
// Environment variables can be used to prevent hardcoding and keep server-side code from hitting errors.

// Instantiate an express application. 
// Remember that you'd normally spread this across the appropriate files instead of cramming them all in one. 
const express = require('express')
const port = process.env.PORT || 5000 // process.env.PORT will run locally or on Heroku, but not on someone's machine if they clone this repo. Add a fallback, always. 

const app = express()

// Mock API, this doesn't do anything. 
app.use('/api/*', (_, res) => {
    res.json({ data: "WIZARDS" })
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
});