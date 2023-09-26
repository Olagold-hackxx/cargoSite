const app = require("./app");
const morgan = require("morgan");
const user = require("./routes/user");
const package = require("./routes/package");
const price = require("./routes/price");
const shipment = require("./routes/shipment");
const category = require("./routes/package");

app.use(morgan("tiny"));
app.use("/api/v1", [user, package, price, shipment, category]);

function errorHandler(err, req, res, next) {
  res.status(500).json({
    success: false,
    error: err.messages,
  });
}

//ERROR MIDDLEWARE
app.use(errorHandler);
