const crypto = require("crypto");
const callPaystackApi = require("../utils/paystack");
const CardTokenModel = require("../models/CardToken");

require("dotenv").config();

const initializePayment = async (req, res) => {
  try {
    // Generate a unique transaction reference
    const transactionRef = generateTransactionReference();
    const payload = {
      currency: "NGN",
      amount: req.body.amount * 100,
      email: req.body.email,
      reference: transactionRef,
      callback_url: `${process.env.APP_BASE_URL}/verify/${transactionRef}`,
    };
    const payment = await callPaystackApi(
      "post",
      `${process.env.PAYSTACK_URL}/transaction/initialize`,
      payload
    );
    console.log(payment.data.authorization_url);
    return res.redirect(payment.data.authorization_url);
  } catch (err) {
    return res.status(500).send(err);
  }
};

//verify payment status
const verifyPayment = async (req, res) => {
  try {
    // Verify the payment
    const transaction = await callPaystackApi(
      "get",
      `${process.env.PAYSTACK_URL}/transaction/verify/${req.params.txref}`
    );
    return res.status(201).json(transaction);
  } catch (err) {
    return res.status(500).json(err);
  }
};

function generateTransactionReference() {
  return crypto.randomBytes(12).toString("hex");
}

const addCardPayment = async (req, res) => {
  try {
    // Generate a unique transaction reference
    const transactionRef = generateTransactionReference();
    const payload = {
      currency: "NGN",
      amount: 50 * 100,
      email: req.body.email,
      reference: transactionRef,
      callback_url: `${process.env.APP_BASE_URL}/verify-card/${transactionRef}`,
    };

    //Initialize test payment to save payment token
    const payment = await callPaystackApi(
      "post",
      `${process.env.PAYSTACK_URL}/transaction/initialize`,
      payload
    )
      .then(() => {
        console.log("Payment complete");
        return res.redirect(payment.data.authorization_url);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).send(err);
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const verifyAddedCard = async (req, res) => {
  try {
    //Verify payment
    const transaction = await callPaystackApi(
      "get",
      `${process.env.PAYSTACK_URL}/transaction/verify/${req.params.txref}`
    );
    const data = transaction.data.authorization;
    const cardData = {
      authorization: {
        authorization_code: data.authorization_code,
        cardType: data.card_type,
        last4: data.last4,
        expMonth: data.exp_month,
        expYear: data.exp_year,
        bin: data.bin,
        bank: data.bank,
        channel: data.channel,
        signature: data.signature,
        reusable: data.reusable,
        countryCode: data.country_code,
        accountName: data.account_name,
      },
    };
    const tokenExist = await CardTokenModel.findOne({
      signature: data.signature,
    });
    if (tokenExist) {
      return res
        .status(400)
        .json({ message: "Card exists, delete or add new card instead " });
    }
    //Check if user has previously added card payment
    // create a new card token
    await CardTokenModel.create({
      cardData,
	  userId: req.user._id,
    })
      .then((result) => {
        return res.status(201).json({
          cardType: result.cardType,
          last4: result.last4,
          expMonth: result.expMonth,
          expYear: result.expYear,
          bank: result.bank,
          countryCode: result.countryCode,
          accountName: result.accountName,
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteAddedCard = async (req, res) => {
  try {
	await CardTokenModel.findOneAndDelete({
		last4: req.body.last4,
	  })
	  .then((err) => {
		console.log("Card deleted");
		res.status(201).json({
			message: "Card deleted successfully"
		});
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({
			err
		})
	  })
  } catch (err) {
	res.status(500).json({
		err
	})
  }
};

module.exports = {
  initializePayment,
  verifyPayment,
  addCardPayment,
  verifyAddedCard,
  deleteAddedCard,
};
