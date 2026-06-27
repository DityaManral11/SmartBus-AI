const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all buses
router.get("/", (req, res) => {
  db.query("SELECT * FROM buses", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Add a new bus
router.post("/", (req, res) => {
  const { bus_number, driver_name, capacity, status } = req.body;

  const sql =
    "INSERT INTO buses (bus_number, driver_name, capacity, status) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [bus_number, driver_name, capacity, status],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.status(201).json({
        message: "Bus added successfully",
        id: result.insertId,
      });
    }
  );
});

module.exports = router;