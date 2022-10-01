const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json()); //middleware
app.use(cors());//middleware

const userController = require('.controllers/houseController')
const { createHouse, getAllHouses, updateHouse, deleteHouse } = userController
app.post('/api/houses', createHouse)
app.get('/api/houses', getAllHouses)
app.put('/api/houses', updateHouse)
app.delete('/api/houses', deleteHouse)

app.listen(4000, () => console.log('Server running on port 4000'));

