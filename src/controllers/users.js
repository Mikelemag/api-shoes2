const { Users } = require ('../models')

async function createUser(req,res){
    try {
        await Users.create(req.body)
        return res.status(201).send('Usuário criado com sucesso')
        } catch (error) {
        console.error(error)
        return res.status(500).send('Erros ao criar usuário') 
            
        
    }
}

async function getUsers(req, res) {
    try {
        const usuarios = await Users.findAll();
        return res.status(200).send(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro ao atualizar usuarios');
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await Users.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedUser = await Users.findOne({ where: { id } });
            return res.status(200).send('Usuário atualizado com sucesso', updatedUser);
        }
        throw new Error('Usuário não encontrado');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro ao atualizar usuário');
    }
    
}

async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        const deleted = await Users.destroy({
            where: { id }
        });
        if (deleted) {
            return res.status(204).send('Usuário deletado com sucesso');
        }
        throw new Error('Usuário não encontrado');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro ao deletar usuário');
    }
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
}
