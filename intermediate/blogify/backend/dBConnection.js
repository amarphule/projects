const mongoose = require("mongoose");

const dBconnection = async (url) => {
  return await mongoose.connect(`${url}`);
};

module.exports = dBconnection;
