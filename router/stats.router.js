const logger = require('tracer').colorConsole()

const sequelize = require('../util/sequelize')

const stats = {

    search: (ctx) => {
        let sql = `
            select id, name, address, address1, address2
            from hola_place
            where locate(:keyword, name) > 0
                or locate(:keyword, intro) > 0`
        let result
        sequelize.query(sql, {
            replacements: ctx.request.body,
            type: sequelize.QueryTypes.SELECT
        }).then(function (data) {
            logger.trace(data)
            result = data
            ctx.body = {message: 'OK'}
        })
    }
}

module.exports = stats
