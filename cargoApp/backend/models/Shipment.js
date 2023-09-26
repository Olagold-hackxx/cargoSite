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
	category: {
		type: ObjectId,
		ref: "Package Category",
		required: [true, "Package must belong to a category"]

	}
}, {timestamps: true});

module.exports = mongoose.model("Shipment", shipment)
