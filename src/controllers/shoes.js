const { Shoes } = require('../models')

async function createShoes(req,res){
    try {
        await Shoes.create(req.body)
        return res.status(201).send('Tênis criado com sucesso')
        } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })
    }
}

async function getAllShoes(req, res) {
    try {
        const shoes = await Shoes.findAll()
        return res.status(200).send(shoes)
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })
    }
}


module.exports = {
    createShoes,
    getAllShoes
}
