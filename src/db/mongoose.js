const mongoose = require("mongoose");

//connecting to data base
mongoose.connect("mongodb://localhost:27017/address-book", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
