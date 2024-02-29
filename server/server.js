const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static(`${__dirname}/../client`))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd43511b4fbfb4251bd6dc94b1362b907',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const {
  getCompliment,
  getFortune,
  getAllFortunes,
  deleteFortune,
  addFortune,
  updateFortune,
} = require("./controller");

app.get('/trigger-error', (req, res) => {
  try {
    nonExistentFunction();
  } catch (err) {
    rollbar.error(err, req);
  }
  res.send('Error triggered');
});

app.use(cors());
app.use(express.json());

app.get("/api/fortune", getFortune);
app.get("/api/compliment", getCompliment);
app.get("/api/allfortunes", getAllFortunes);
app.delete("/api/fortune/:id", deleteFortune);
app.post("/api/fortune", addFortune);
app.put("/api/fortune/:id", updateFortune);

app.listen(4000, () => console.log("Server running on 4000"));
