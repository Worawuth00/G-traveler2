const express = require("express");
const router = express.Router();
const { getAllTours, getTourById } = require("../controllers/tourController");
const Tour = require("../models/tourModel");
const tours = require("../data/tours");

// seed tours to database
// router.get("/seed", async (req, res) => {
//   const createTour = await Tour.insertMany(tours);
//   res.send({ createTour });
// });

router.get("/", getAllTours);

router.get("/:id", getTourById);

module.exports = router;
