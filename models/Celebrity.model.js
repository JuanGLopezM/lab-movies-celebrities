//  Add your code here
const mongoose = require("mongoose");

const celebSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  occupation: {
    type: String,
  },
  catchPhrase: {
    type: String,
  },
});

const Celebrity = mongoose.model("Celebrity", celebSchema);
module.exports = Celebrity;
