const logger = require('tracer').colorConsole()

const Koa = require('koa')
const mount = require('koa-mount')
const route = require('koa-route')
const serve = require('koa-static')

const config = require('./config')

const app = new Koa()

app.use(serve('./public'))
app.use(mount('/lib', serve('./node_modules')))

const placeRouter = require('./router/place.router')
app.use(route.get('/place', placeRouter.list))
app.use(route.get('/place/add', placeRouter.add))

app.listen(config.port)
logger.log('服务运行于 http://127.0.0.1:' + config.port)