const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const shipment = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, 'Please add a name for this shipment'],
		maxlength: 64
	},
	description: {
		type: String,
		trim: true,
		required: [true, 'Please add a description for this shipment'],
	},
	price: {
		type: Number,
		trim: true,
		required: [false]
	},
	userId: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
		required: true,
	  },
	package: {
		type: ObjectId,
		ref: "Package Category",
		required: [true, "Shipment must have at least one package"]

	}
}, {timestamps: true});

const ShipmentModel = mongoose.model("Shipment", shipment);
module.exports = ShipmentModel;
