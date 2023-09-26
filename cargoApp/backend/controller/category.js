#!/usr/bin/node
const database = require('./database/dbController');
const Category = require('../models/Category');

export const getAllCategory = async () => {
	const Category = new database(Category);
}