/**
 * @author David Menger
 */


/**
 * Asynchronous code example
 */

const crypto = require('crypto');

console.log('will be called first');

var result = null;

crypto.randomBytes(256, function(err, buf) {
    if (err) {
        throw err;
    }
    result = buf.toString('hex');
    console.log('will be called third with filled result', result);
});

console.log('will be called second with null result:', result);


/**
 * Blocking the event loop
 */

setTimeout(() => {
    let continueInLoop = true;

    setTimeout(() => {

        // this will never be called
        console.log('this will never be called');
        continueInLoop = false;
    }, 1000); // call after one second

    console.log('last log, which will be shown');

    while (continueInLoop) {
        // this 'nice' blocking code will kill your application
    }

    console.log('this will never be called too');
}, 1000);
