#!/usr/bin/node
const database = require('./database/dbController');
const Package = require('../models/Package');

export const getAllPackage = async () => {
	const Package = new database(Package);
}