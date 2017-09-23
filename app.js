const logger = require('tracer').colorConsole()

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mount = require('koa-mount')
const route = require('koa-route')
const serve = require('koa-static')
const proxy = require('koa-proxy')

const config = require('./config')

const app = new Koa()

app.use(bodyParser())

app.use(serve('./public'))
app.use(mount('/lib', serve('./node_modules')))

app.use(route.get('/student', proxy({
    url: 'http://127.0.0.1:8080'
})))

const placeRouter = require('./router/place.router')
app.use(route.post('/place/add', placeRouter.add))
app.use(route.put('/place/:id', placeRouter.update))
app.use(route.get('/place/:id', placeRouter.info))
app.use(route.get('/place', placeRouter.list))
app.use(route.get('/place/add', placeRouter.add))

const statsRouter = require('./router/stats.router')
app.use(route.post('/search', statsRouter.search))

app.listen(config.port)
logger.log('服务运行于 http://127.0.0.1:' + config.port)
