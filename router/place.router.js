const logger = require('tracer').colorConsole()
const sequelize = require('../util/sequelize')

let Place = require('../model/place.model')

const place = {
    add: async (ctx) => {
        logger.trace(ctx.request.body)
        let sql = `
            insert into hola_place
            set name = :name,
                address = :address, address1 = address1, address2 = :address2,
                latitude = :latitude, longitude = :longitude,
                cover = :cover, intro = :intro
        `
        let result = await sequelize.query(sql, {
            type: sequelize.QueryTypes.INSERT,
            replacements: ctx.request.body
        })
        logger.trace(result)
        ctx.body = {message: 'OK'}
    },
    update: async (ctx) => {
        logger.trace(ctx.request.body)
        let sql = `
            update hola_place
            set name = :name,
                address = :address, address1 = address1, address2 = :address2,
                latitude = :latitude, longitude = :longitude,
                cover = :cover, intro = :intro
            where id = :id
        `
        let result = await sequelize.query(sql, {
            type: sequelize.QueryTypes.UPDATE,
            replacements: ctx.request.body
        })
        ctx.body = {message: 'OK'}
    },
    info: async (ctx, id) => {
        let place = await Place.findById(id)
        ctx.body = JSON.stringify(place)
    },
    list: async (ctx) => {
        let sql = `
            select p.id, p.name,
                p.address, p.address1, p.address2,
                p.cover,
                p.intro
            from hola_place as p
        `
        let data = await sequelize.query(sql, {
            type: sequelize.QueryTypes.SELECT,
            replacements: ctx.request.body
        })
        ctx.body = data
    }
}

module.exports = place
