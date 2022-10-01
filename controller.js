const houses = require('./db.json')
let globalId = 4

module.exports = {
    createHouse: (req,res) => {
        let id = req.body.id
        let address = req.body.address
        let price = req.body.price 
        let imageURL = req.body.imageURL 
        
        if (!id, !address, !price, !imageURL) {
            res.status(400).send('Missing data.')
        } else {
            houseDatabase.push(req, res) // to add house info sent from FE to the houseDatabase
            res.status(200).send('House successfully added.')
        }
    },
    getHouses: (req, res) => {
        res.status(200).send(houses)

    },
    updateHouse: (req, res) => {
        let existingHouse = req.param.id // let { id } = req.params
        let newHouse = req.body.id // let { type } = req.body
        for (let i = 0; i < houses.length; i++) {
            if (houses[i].id === existingHouse) {
                
                // if (houses[index].price <= 10000 && type === 'minus') {
                //     houses[index].price = 0
                //     res.status(200).send(houses)
                // } else if (type === 'plus') {
                //     houses[index].price += 10000
                //     res.status(200).send(houses)
                // } else if (type === 'minus') {
                //     houses[index].price -= 10000
                //     res.status(200).send(houses)
                // } else {
                //     res.sendStatus(400)
                // }
            }
        }

    },
    deleteHouse: (req, res) => {
        let existingHouse = req.param.id
        for (let i = 0; i < houses.length; i++) {
            if (houses[i].id === existingHouse) {
                houses.splice(i, 1)
                res.status(200).send('House deleted.')
                return houses
            }

        }
        res.status(400).send('House not found.')
    // OR    
    // deleteHouse: (req, res) => {
    //     let index = houses.findIndex(elem => elem.id === +req.params.id)
    //     houses.splice(index, 1)
    //     res.status(200).send(houses)
    }
}

// notes: Part 3
// 1 - done
// 2 - done
// 3 - GET completed
// 4 - Delete completed, need their code explained
// 5 - POST done
// 6 - PUT explain how type works