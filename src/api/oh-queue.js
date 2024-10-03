'use strict';

const controllers = require.main.require('./src/controllers');

module.exports = function (app, middleware, controllers) {
    // Define a route for the oh-queue page
    app.get('/oh-queue', middleware.buildHeader, function (req, res) {
        // Render the template for the oh-queue page
        res.render('oh-queue', {});
    });

    app.get('/api/oh-queue', function (req, res) {
        // Serve the data for the oh-queue page
        res.json({
            message: 'Welcome to the Office Hours Queue page!',
        });
    });
};
