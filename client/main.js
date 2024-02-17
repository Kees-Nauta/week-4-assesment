const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById(`fortuneBtn`)
const getAllBtn = document.getElementById(`allFortunesBtn`)
const fortunesList = document.getElementById('fortunes-list')
const addFortuneForm = document.getElementById('addFortuneForm');

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
        fortunesList.innerHTML = '';

        allFortunes.forEach(fortune => {
            const listItem = document.createElement('li');
            const fortuneText = document.createElement('span');
            fortuneText.textContent = fortune.fortune; 

            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = fortune.fortune;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editFortune(fortune.id, editInput.value));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteFortune(fortune.id));
            
            listItem.appendChild(fortuneText);
            listItem.appendChild(editInput);
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
            fortunesList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error getting all fortunes:', error);
    });
};



const deleteFortune = (id) => {
    console.log("Deleting fortune with id:", id);
    axios.delete(`http://localhost:4000/api/fortune/${id}`)
      .then(() => {
        getAllFortunes();
      })
      .catch(error => {
        console.error('Error delting:', error);
      });
};



addFortuneForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const fortuneInput = document.getElementById('fortuneInput').value;
    axios.post('http://localhost:4000/api/fortune', { fortune: fortuneInput })
        .then(response => {
            alert(response.data.message);
            
        })
        .catch(error => {
            console.error('Error adding fortune:', error);
        });
});
const editFortune = (id, newFortune) => {
    axios.put(`http://localhost:4000/api/fortune/${id}`, { fortune: newFortune })
        .then(response => {
            alert(response.data.message);
            getAllFortunes();
        })
        .catch(error => {
            console.error('Error editing:', error);
        });
};





getAllBtn.addEventListener(`click`, getAllFortunes)
fortuneBtn.addEventListener(`click`, getFortune)
complimentBtn.addEventListener('click', getCompliment)