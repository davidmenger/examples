const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const routes = require('./routes');

var app = express();

// set up view engine
const viewsDir = path.join(__dirname, 'views');
const layoutsDir = path.join(viewsDir, 'layouts');

app.engine('hbs', expressHandlebars({
    defaultLayout: 'default',
    layoutsDir,
    extname: '.hbs'
}));

app.set('views', viewsDir);
app.set('view engine', 'hbs');

// let's have some global variables
app.locals.debugEnabled = app.get('env') === 'development';

// mount a main router
app.use('/', routes);

// handle 404 - not found
app.use((req, res) => {
    res.status(404);
    res.render('notFound', {
        url: req.url
    });
});

// handle errors
app.use((err, req, res, next) => {
    console.log('Error: ', err.message, err.stack);
    res.status(err.status || 500);
    res.render('error', {
        err
    });
});

module.exports = app;
