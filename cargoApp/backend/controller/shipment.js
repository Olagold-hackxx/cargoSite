#!/usr/bin/node
const database = require('./database/dbController');
const Shipment = require('../models/Shipment');

export const getAllShipment = async () => {
	const Shipment = new database(Shipment);
}