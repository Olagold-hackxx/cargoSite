const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const package = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, 'Please add your first name'],
		maxlength: 256
	},
	weight: {
		type: Number,
		trim: true,
		required: [true, 'Please add weight in KG'],
	},
	category: {
		type: ObjectId,
		ref: "Package Category",
		required: [true, "Package must belong to a category"]

	}
}, {timestamps: true});

module.exports = mongoose.model("Package", package);
