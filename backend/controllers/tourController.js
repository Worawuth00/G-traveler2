const Tour = require("../models/tourModel");

exports.getAllTours = async (req, res) => {
  const tours = await Tour.find();
  res.status(200).json(tours);
};

exports.getTourById = async (req, res) => {
  const tour = await Tour.findById(req.params.id);
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
