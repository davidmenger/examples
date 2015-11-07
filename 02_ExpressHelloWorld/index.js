/**
 * @author David Menger
 *
 * ES6 Example
 */

const express = require('express');

// create an instance of a express app
const app = express();

// let's track a count of requests
var requestCount = 0;

// listen for request event
app.get('/', (req, res) => {

    // increment a counter
    requestCount++;

    // write response and finnish it
    res.send(`Hello world! (for ${requestCount} times)`);
});

// start a webserver on port 8080
app.listen(8080);
