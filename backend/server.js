require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/buses", require("./routes/buses"));
app.use("/api/locations", require("./routes/locations"));

app.get("/", (req, res) => {
  res.send("SmartBus AI Backend Running 🚍");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});