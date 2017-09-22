const http = require('http')

const logger = require('tracer').colorConsole()
const sequelize = require('../util/sequelize')

let Place = require('../model/place.model')

var comm = async function (option) {
    // new Promise((resolve, reject) => {
        let req = http.request(option, res => {
            const {statusCode} = res
            if (statusCode !== 200) {
                error = new Error('请求失败:\n' + `错误代码: ${statusCode}`)
            }
            res.setEncoding('utf8')
            let rawData = ''
            res.on('data', (chunk) => {
                let parsedData = JSON.parse(chunk)
                logger.trace(JSON.stringify(parsedData))
                // resolve(JSON.stringify(parsedData))
                return JSON.stringify(parsedData)
            })
        })
        req.write('')
        req.end()
        // resolve()
    // })
}

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
