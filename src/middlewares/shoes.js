 function validateCreateShoes(req, res, next){
    const {nome , categoria, preco, image_url, cor, tamanho } = req.body;

    if(!nome || !categoria || !preco || !image_url || !cor || !tamanho){
        return res.status(400).send('Todos os campos obrigatórios')

    }
    if(nome.length > 100){
        return res.status(400)
        .send('O nome do produto não pode ter mais que 100 caracteres')
    }
    if(categoria.length > 50) {
        return res.status(400)
        .send('Categoria não pode ter mais que 50 caracteres')
    }

    if(preco <= 0)
    return res.status(400)
    .send('O preço deve ser maior que zero')

    if(!image_url)
        return res.status(400).send('URL da imagem é obrigatória')


    if(tamanho <=33 || tamanho >= 40)
        return res.status(400).send('Tamanho deve ser entre 33 e 40')


    next();
}

function validateDeleteShoes(req, res, next){
    const { id } = req.params;
    
    if(!id){
        return res.status(400).send('ID do produto é obrigatório')
    }
       next();
}

module.exports = {
    validateCreateShoes,
    validateDeleteShoes
}