// Source: ChatGPT

'use strict';

// const controllers = require.main.require('./src/controllers');

module.exports = function (app, middleware) {
	// Define a route for the oh-queue page
	app.get('/oh-queue', middleware.buildHeader, (req, res) => {
		// Render the template for the oh-queue page
		res.render('oh-queue', {});
	});

	app.get('/api/oh-queue', (req, res) => {
		// Serve the data for the oh-queue page
		res.json({
			message: 'Welcome to the Office Hours Queue page!',
		});
	});
};

