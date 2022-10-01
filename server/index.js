const express = require('express');
const cors = require('cors');
const { 
    createHouse, 
    getAllHouses, 
    updateHouse, 
    deleteHouse 
} = require('./houseController')

const app = express();

app.use(express.json()); //middleware
app.use(cors());//middleware

app.post('/api/houses', createHouse) 
app.get('/api/houses', getAllHouses)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

app.listen(4004, () => console.log('Server running on port 4004'));