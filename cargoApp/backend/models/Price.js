const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const price = new mongoose.Schema({
	minPrice: {
		type: Number,
		trim: true,
		required: [true, 'Please add minimum price'],
	},
	maxPrice: {
		type: Number,
		trim: true,
		required: [true, 'Please add maximum price'],
	},
	category: {
		type: ObjectId,
		ref: "Package Category",

	}
}, {timestamps: true});

module.exports = mongoose.model("Price", price)
