const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./utils/dbConnect");
const authRouter = require("./routers/auth");
const paymentRouter = require("./routers/payment");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

const errorHandlerMiddleware = require('./middleware/errorHandler');

// connect database
connectDb(mongo_uri);

app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//built-in middleware for json
app.use(express.json());

//express session middleware
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
  }))

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use(cookieParser(process.env.JWT_SECRET));

// setup routes

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/payment", paymentRouter);

app.use(errorHandlerMiddleware);

//Setting Up The Port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});