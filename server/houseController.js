const houses = require('./db.json')
let globalId = 4;

const createHouse = (req,res) => {
    // const id = req.body.id
    // const address = req.body.address
    // const price = req.body.price 
    // const imageURL = req.body.imageURL 
    const { id, address, price, imageURL } = req.body;
   
    if (!id, !address, !price, !imageURL) {
        res.status(400).send('Missing data.')
    } else {
        const { id, address, price, imageURL } = req.body;
        houses.push({
        id: globalId,
        address,
        price,
        imageURL,
    });
    globalId++
    res.status(200).send(houses);
}
}

const getAllHouses = (req, res) => {
    res.status(200).send(houses);
}

const updateHouse = (req, res) => {
        // let existingHouse = req.param.id 
        // let newHouse = req.body.id 

        const { id } = req.params;
        const { type } = req.body; // either 'plus' or 'minus'
       //console.log(req.params)
       //console.log(req.body)
        for (let i = 0; i < houses.length; i++) {
            if (houses[i].id === +id) {
                if (type === 'minus' && houses[i].price <= 10000) {
                    houses[i].price = 0
                } else if (type === 'minus') {
                    houses[i].price -= 10000
                } else if (type === 'plus') {
                        houses[i].price += 10000
                } else {
                    res.status(400).send('House not found')
                }
                return res.status(200).send(houses); 
            }
        }

        /*
        (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(elem => +elem.id === +id)
        const adjustment = {
            plus: () => houses[index].price += 10000,
            minus: () => houses[index].price = Math.max(0, houses[index].price - 10000)
        }

        adjustment[type]();
        res.status(200).send(houses)
    }
        const houseIndex = houses.findIndex((house) => house.id === +id);
        if (houses[i].id === +id) {
            if (type === 'plus') {
                houses[houseIndex].price += 10000
            } else if (type === 'minus') {
                houses[houseIndex].price -= 10000
            } else if (type === 'minus' && houses[i].price <= 1000) {
                houses[houseIndex].price = 0
            } else {
                res.status(400).send('House not found')
            }
            return res.status(200).send(houses); 
        } */
    }

    const deleteHouse = (req, res) => {
        const houses = require('./db.json');
        const { id } = req.params;
        for (let i = 0; i < houses.length; i++) {
            if (houses[i].id === +id) {
                houses.splice(i, 1)
                return res.status(200).send(houses)
            }
        }
        res.status(400).send('House not found.')
    }

module.exports = {
    createHouse,
    getAllHouses,
    updateHouse,
    deleteHouse
};