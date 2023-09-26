#!/usr/bin/node
const database = require('./database/dbController');
const Price = require('../models/Price');

export const getAllPrice = async () => {
	const Price = new database(Price);
}