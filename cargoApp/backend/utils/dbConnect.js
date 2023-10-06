const mongoose = require("mongoose");

/**
 * connect to mongodb database
 * @param {string} mongo_uri : mongodb connection string
 */
function connectDb(mongo_uri) {
  mongoose
    .connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("successfully connected to mongodb");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDb;
