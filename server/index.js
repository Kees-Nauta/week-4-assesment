const express = require("express");
const cors = require("cors");
const {
  getCompliment,
  getFortune,
  getAllFortunes,
  deleteFortune,
  addFortune,
  updateFortune,
} = require("./controller");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/fortune", getFortune);
app.get("/api/compliment", getCompliment);
app.get("/api/allfortunes", getAllFortunes);
app.delete("/api/fortune/:id", deleteFortune);
app.post("/api/fortune", addFortune);
app.put("/api/fortune/:id", updateFortune);

app.listen(4000, () => console.log("Server running on 4000"));
