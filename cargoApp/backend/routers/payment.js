const express = require("express");
const {
  initializePayment,
  verifyPayment,
  addCardPayment,
  verifyAddedCard,
  deleteAddedCard,
} = require("../controller/payment");
const {
  validatePaymentDetails,
} = require("../middleware/validators/payment");

const paymentRouter = express.Router();
const { validate } = require("express-validation");

paymentRouter.post(
  "/initialize",
  validate(validatePaymentDetails, {}, {}),
  initializePayment
);

paymentRouter.post("/add-card", addCardPayment);
paymentRouter.get("/verify/:txref", verifyPayment);
paymentRouter.get("/verify-card/:txref", verifyAddedCard);
paymentRouter.post("/delete-card", deleteAddedCard);


module.exports = paymentRouter;
