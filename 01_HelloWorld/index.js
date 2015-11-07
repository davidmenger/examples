/**
 * @author David Menger
 *
 * ES6 Example
 */

const http = require('http');

// create an instance of a nodejs http server
const server = http.createServer();

// let's track a count of requests
var requestCount = 0;

// listen for request event
server.on('request', (req, res) => {

    // increment a counter
    requestCount++;

    // write response and finnish it
    res.write(`Hello world! (for ${requestCount} times)`);
    res.end();
});

// start a webserver on port 8080
server.listen(8080);
