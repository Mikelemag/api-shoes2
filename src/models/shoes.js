const {DataTypes} = require ('sequelize')
const sequelize = require('../config/database')

const Shoes = sequelize.define('Shoes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_url: {
        type: DataTypes.TEXT,

    },

    tamanho: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate:{
            min: 33,
            max: 40
        },
    },

    cor:{
        type:DataTypes.STRING,
        allowNull: false

    },

})

module.exports = Shoes