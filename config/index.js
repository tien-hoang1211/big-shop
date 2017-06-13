const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

let config = app => {
    app.engine('hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'layout',
        layoutsDir: 'app/views/layouts/',
        partialsDir: 'app/views/partials/'
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.resolve('./app/views'));
    app.use(express.static('./public'));
}

module.exports = config;