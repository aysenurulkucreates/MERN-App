const mongoose = require("mongoose");

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    console.log("Connection is succesfull");
  })
  .catch((error) => {
    console.log(error);
  });
