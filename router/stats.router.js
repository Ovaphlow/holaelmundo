const logger = require('tracer').colorConsole()

const sequelize = require('../util/sequelize')

const stats = {

    search: async (ctx) => {
        let sql = `
            select id, name, address, address1, address2
            from hola_place
            where locate(:keyword, name) > 0
                or locate(:keyword, intro) > 0`
        let data = await sequelize.query(sql, {
            type: sequelize.QueryTypes.SELECT,
            replacements: ctx.request.body
        })
        // logger.trace(data)
        ctx.body = data
    }
}

module.exports = stats
