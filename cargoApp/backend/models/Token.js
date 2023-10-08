const mongoose = require('mongoose');

const token = new mongoose.Schema(
  {
    refreshToken: { type: String, required: true },
    isValid: { type: Boolean, default: true },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const TokenModel = mongoose.model('Token', token);
module.exports = TokenModel;