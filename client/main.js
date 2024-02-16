const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById(`fortuneBtn`)
const getAllBtn = document.getElementById(`allFortunesBtn`)
const fortunesList = document.getElementById('fortunes-list')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

const getFortune = () => {
    axios.get(`http://localhost:4000/api/fortune/`)
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

const getAllFortunes = () => {


    axios.get('http://localhost:4000/api/allfortunes')
    .then(response => {
      const allFortunes = response.data;
      fortunesList.innerHTML = ''

      allFortunes.forEach(fortune => {
        const listItem = document.createElement('li');
        listItem.textContent = fortune;

        console.log(fortune)
       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteFortune(fortune.id));
        
        deleteButton.setAttribute("id", "1")
        
        listItem.appendChild(deleteButton);

        
        fortunesList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error all fortunes:', error);
    });
};



const deleteFortune = (id) => {
    console.log("Deleting fortune with id:", id)
    axios.delete(`http://localhost:4000/api/fortune/${id}`)
      .then(() => {
        getAllFortunes();
      })
      .catch(error => {
        console.error('Error deleting:', error);
      });
  };





getAllBtn.addEventListener(`click`, getAllFortunes)
fortuneBtn.addEventListener(`click`, getFortune)
complimentBtn.addEventListener('click', getCompliment)