#!/usr/bin/node
const mongooose = require('mongoose');


class Base {

	id = 'ID';
	created_at = new Date();
	updated_at = new Date();
	constructor(h) {

	}

}

module.exports = Base;