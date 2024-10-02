//Source: ChatGPT
'use strict';

const querystring = require('querystring');

const helpers = require('./helpers');

const ohQueueController = module.exports;

ohQueueController.render = async function (req, res, next) {
	// Simulate a queue rendering logic. You could replace this with actual queue data.
	const data = {
		title: 'OH Queue',
		description: 'This is the OH Queue page',
		queue: [
			{ name: 'Student 1', topic: 'Database Design', time: '10:00 AM' },
			{ name: 'Student 2', topic: 'Algorithms', time: '10:15 AM' },
			{ name: 'Student 3', topic: 'Operating Systems', time: '10:30 AM' },
		],
	};

	// Render the template 'oh-queue.tpl'
	res.render('oh-queue', data);
};

ohQueueController.getQueueData = async function (req, res) {
	const page = parseInt(req.query.page, 10) || 1;
	const itemsPerPage = 10;
	const start = Math.max(0, (page - 1) * itemsPerPage);
	const stop = start + itemsPerPage - 1;

	// Simulate fetching queue data
	const queueData = [
		{ name: 'Student 1', topic: 'Database Design', time: '10:00 AM' },
		{ name: 'Student 2', topic: 'Algorithms', time: '10:15 AM' },
		{ name: 'Student 3', topic: 'Operating Systems', time: '10:30 AM' },
		// ... more data
	];

	const paginatedData = queueData.slice(start, stop + 1);
	res.json(paginatedData);
};

