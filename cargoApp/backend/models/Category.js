const mongoose = require('mongoose');

const category = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, 'Please add your first name'],
		maxlength: 256
	},
	minPricePerKg: {
		type: Number,
		trim: true,
		required: [true, 'Please add minimum price'],
	},
	maxPricePerKg: {
		type: Number,
		trim: true,
		required: [true, 'Please add maximum price'],
	},
}, {timestamps: true});

module.exports = mongoose.model("Package Category", category);
