const logger = require('tracer').colorConsole()
const sequelize = require('../util/sequelize')

let Place = require('../model/place.model')

const place = {
    add: (ctx) => {
        Place.create({
            id: 0,
            address: '黑龙江',
            address1: '哈尔滨',
            address2: '道里区',
            name: '冰雪大世界',
            latitude: '45.43',
            longitude: '124.22',
            intro: 'qedsf23r4fed'
        })
        ctx.body = {message: 'OK'}
    },
    info: async (ctx, id) => {
        console.log(id)
        let place = await Place.findById(id)
        logger.trace(place)
        ctx.body = place
    },
    list: async (ctx) => {
        logger.log('place', 'list')
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
        // logger.trace(data)
        ctx.body = data
    }
}

module.exports = place
