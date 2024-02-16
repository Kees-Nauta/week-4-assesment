
const fortunes = [
    { id: 1, fortune: "good" },
    { id: 2, fortune: "bad" },
    { id: 3, fortune: "okay" },
    { id: 4, fortune: "meh" },
    { id: 5, fortune: "bruh" }
]


const getCompliment = (req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    
    res.status(200).send(randomCompliment);
};

const getFortune = (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length)
    let randomFortune = fortunes[randomIndex].fortune;

    res.status(200).send(randomFortune);
};

const getAllFortunes = (req, res) => {
    console.log(fortunes.id)
    const allFortunes = [];
fortunes.forEach(fortune => {
    allFortunes.push(fortune.fortune);
});
    res.status(200).send(allFortunes);
};
const deleteFortune = (req, res) => {
    const id = +req.params.id; 
    const index = fortunes.findIndex(fortune => fortune.id === id);
    console.log(index)
    if (index !== -1) {
        fortunes.splice(index, 1);
        res.status(200).send({ message: 'Fortune deleted successfully' });
    } else {
        res.status(404).send({ error: 'Fortune not found' });
    }
};

module.exports = {
    getCompliment,
    getFortune,
    getAllFortunes,
    deleteFortune
};