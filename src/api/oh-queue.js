// source chatGPT

'use strict';

module.exports = (app, middleware) => {
	app.get('/oh-queue', middleware.buildHeader, (req, res) => {
		res.render('oh-queue', {});
	});
	app.get('/api/oh-queue', (req, res) => {
		res.json({
		});
	});
};
