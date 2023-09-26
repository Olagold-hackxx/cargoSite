#!/usr/bin/node
const database = require('./database/dbController');
const User = require('../models/User');

export const getAllUser = async () => {
	const user = new database(User);
}