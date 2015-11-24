/**
 * @author David Menger
 */

const express = require('express');

// create a router instance
const router = express.Router();

// example middleware
router.use((req, res, next) => {
    console.log(`Request: ${req.method} - ${req.url}`);
    next();
});

// homepage
router.get('/', (req, res) => {

    // render index.hbs template
    res.render('index');
});

module.exports = router;
