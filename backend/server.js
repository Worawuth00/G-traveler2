const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const tourRoute = require("./routes/tourRoute");

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log(error.message);
  }
};

connectDB();

app.use("/api/tour", tourRoute);

app.get("/api", (req, res) => {
  res.send("Welcome to g-traveler API");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server has started on port 5000");
});
