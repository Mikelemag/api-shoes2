const sequelize = require('../config/database')
const Users = require('./users')


sequelize.sync({ alter: true })
    .then(() => console.log("Tabelas sincronizadas com secesso"))
    .catch((error) => console.error('Erro ao sincronizar tabelas', error))

module.exports = {
    Users
}