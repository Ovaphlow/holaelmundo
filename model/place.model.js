const Sequelize = require('sequelize')

const sequelize = require('../util/sequelize')

const Place = sequelize.define('place', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    address1: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    address2: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    latitude: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    cover: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    longitude: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    intro: {
        type: Sequelize.TEXT
    },
},
{
    tableName: 'hola_place',
    timestamps: false,
    // createdAt: 'create_at',
    // updatedAt: 'update_at',
    // deletedAt: 'delete_at',
    // paranoid: true
})

module.exports = Place
