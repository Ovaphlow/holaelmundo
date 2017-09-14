const logger = require('tracer').colorConsole()

const sequelize = require('sequelize')
let Place = require('../model/place.model')

const placeList = [
    {id: 1, name: 'place1'},
    {id: 2, name: 'place2'},
    {id: 3, name: 'place3'},
]

const place = {
    add: (ctx) => {
        logger.trace('place', 'add')
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
        logger.trace(Place.id)
        ctx.body = {message: 'OK'}
    },
    list: (ctx) => {
        logger.log('place', 'list')
        ctx.body = placeList
    }
}

module.exports = place
