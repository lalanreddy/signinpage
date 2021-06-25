const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://lalan:lalan%4016@cluster0-shard-00-00.dw2ku.mongodb.net:27017,cluster0-shard-00-01.dw2ku.mongodb.net:27017,cluster0-shard-00-02.dw2ku.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-22avuv-shard-0&authSource=admin&retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
