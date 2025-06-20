const { Shoes } = require('../models')

async function createShoes(req,res){
    try {
        await Shoes.create(req.body)
        return res.status(201).send('Novo modelo de sapato criado com sucesso')
        } catch (error) {
        console.error(error)
        return res.status(500)
        .send('Erro ao criar novo modelo')
    }
}

async function getAllShoes(req, res) {
    try {
        const shoes = await Shoes.findAll()
        return res.status(200).send(shoes)
    } catch (error) {
        console.error(error)
        return res.status(500)
        .send('Erro ao buscar modelos')
        
    }
}

async function deleteShoes(req, res){
    const {id} = req.params
    try {
        const shoes = await Shoes.destroy({
            where:{
                id: id
            }
        })
        return res.status(204).send('Modelo deletado com sucesso')
       
        
    } catch (error) {
        console.error(error)
        return res.status(500).send("Erro ao deletar modelo selecionado",
            {
            
            error: error.mensage
        })
        
    }
}

async function updateShoes(req, res){
    const { id } = req.params
    const {modelo, preco, categoria, image_url, tamanho, cor} = req.body
    try {
        const [updatedRows] = await Shoes.update(
             { modelo, preco, categoria, image_url, tamanho, cor },
            { where: { id } }
        );


        if (updatedRows === 0){
            return res.status(404).send('Modelo não encontrado');
            
        }
    } 
          catch (error) {
        
        console.error('Erro ao atualizar tênis:', error);
        return res.status(500).json('Erro interno do servidor.');
    }
        
    }



module.exports = {
    createShoes,
    getAllShoes,
    deleteShoes,
    updateShoes

}
