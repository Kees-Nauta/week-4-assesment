const fortunes = [
  { id: 1, fortune: "good" },
  { id: 2, fortune: "bad" },
  { id: 3, fortune: "okay" },
  { id: 4, fortune: "meh" },
  { id: 5, fortune: "bruh" },
];

const getCompliment = (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
};

const getFortune = (req, res) => {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex].fortune;

  res.status(200).send(randomFortune);
};

const getAllFortunes = (req, res) => {
  const allFortunes = fortunes.map((fortune) => ({
    id: fortune.id,
    fortune: fortune.fortune,
  }));
  res.status(200).send(allFortunes);
};

const deleteFortune = (req, res) => {
  const id = +req.params.id;
  const index = fortunes.findIndex((fortune) => fortune.id === id);
  if (index !== -1) {
    fortunes.splice(index, 1);
    res.status(200).send({ message: "Fortune deleted" });
  } else {
    res.status(404).send({ error: "not found" });
  }
};
const addFortune = (req, res) => {
  const { fortune } = req.body;
  if (!fortune) {
    return res.status(400).send({ error: "required" });
  }

  const newFortune = {
    id: fortunes.length + 1,
    fortune: fortune,
  };

  fortunes.push(newFortune);
  res.status(201).send({ message: "Fortune added", fortune: newFortune });
};
const updateFortune = (req, res) => {
  const id = +req.params.id;
  const { fortune } = req.body;
  const index = fortunes.findIndex((f) => f.id === id);
  if (index !== -1) {
    fortunes[index].fortune = fortune;
    res
      .status(200)
      .send({ message: "Fortune updated ", fortune: fortunes[index] });
  } else {
    res.status(404).send({ error: "not found" });
  }
};

module.exports = {
  getCompliment,
  getFortune,
  getAllFortunes,
  deleteFortune,
  addFortune,
  updateFortune,
};
