const Sequelize = require('sequelize')

const config = require('../config')

const sequelize = new Sequelize(
        config.db.name,
        config.db.user,
        config.db.password,
        {
            host: config.db.host,
            dialect: 'mysql',
            pool: {
                max: config.db.pool.max,
                min: config.db.pool.min,
                idle: config.db.pool.idle
            }
        }
)

module.exports = sequelize
