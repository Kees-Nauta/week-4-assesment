const getAllFortunes = (req, res) => {
    // console.log(fortunes.id)
    const allFortunes = [];
fortunes.forEach(fortune => {
    allFortunes.push(fortune.fortune);
});
    res.status(200).send(allFortunes);
};
const deleteFortune = (req, res) => {
    const id = +req;
    fortunes.forEach((el, index) =>{

        
        if (el.id === id) {
            fortunes.splice(index, 1);
            res.status(200).send(fortunes);
        } 
        // else {
            res.status(400).send(fortunes);
        // }
    })
};






const deleteFortune = () => {
    const id = document.getElementById("1")
    console.log("Deleting fortune with id:", id)
    axios.delete(`http://localhost:4000/api/fortune/${id}`)
      .then(() => {
        getAllFortunes();
      })
      .catch(error => {
        console.error('Error deleting:', error);
      });
  };