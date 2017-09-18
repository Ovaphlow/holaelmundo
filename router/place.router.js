const logger = require('tracer').colorConsole()
const sequelize = require('../util/sequelize')

let Place = require('../model/place.model')

const placeList = [
    {id: 1, name: 'place1'},
    {id: 2, name: 'place2'},
    {id: 3, name: 'place3'},
]

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
