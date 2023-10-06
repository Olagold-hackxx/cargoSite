const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardTokenSchema = new Schema({
  cardData: {
    authorization: [
      {
        token: { type: String, required: true },
        bank: { type: String, required: true },
        accountName: { type: String, required: true },
        last4: { type: String, required: true },
        bin: { type: String, required: true },
        expYear: { type: String, required: true },
        expMonth: { type: String, required: true },
        cardType: { type: String, required: true },
        countryCode: { type: String, required: true },
        countryCode: { type: String, required: true },
        reusable: { type: Boolean, required: true },
        createdAt: Date,
      },
    ],
  },
  userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
});

const CardTokenModel = mongoose.model("CardToken", CardTokenSchema);

module.exports = CardTokenModel;
