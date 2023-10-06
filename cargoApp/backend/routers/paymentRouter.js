const express = require("express");
const {
  initializePayment,
  verifyPayment,
  addCardPayment,
  verifyAddedCard,
  deleteAddedCard,
} = require("../new/controllers/paymentController");
const {
  validatePaymentDetails,
} = require("../middleware/validators/paymentValidator");

const paymentRouter = express.Router();
const { validate } = require("express-validation");
const { handleValidationErrors } = require("../middleware/errorHandler");

paymentRouter.post(
  "/initialize",
  validate(validatePaymentDetails, {}, {}),
  handleValidationErrors,
  initializePayment
);

paymentRouter.post("/add-card", addCardPayment);
paymentRouter.get("/verify/:txref", verifyPayment);
paymentRouter.get("/verify-card/:txref", verifyAddedCard);
paymentRouter.post("/delete-card", deleteAddedCard);


module.exports = paymentRouter;
