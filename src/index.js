import BodyParser from 'koa-bodyparser'
import Cors from '@koa/cors'
import Koa from 'koa'
import Logger from 'koa-logger'
import Promise from 'bluebird'
import Routes from './routes'

global.Promise = Promise
const app = new Koa()
const ENV = process.env.ENV || 'development'

// log connections
if (ENV === 'development') {
  app.use(Logger())
}

// enable cross domain connections
app.use(
  Cors({
    origin: '*',
  })
)
// parse json automatically
app.use(
  BodyParser({
    jsonLimit: '10mb',
    textLimit: '10mb',
  })
)

// setup routes
app.use(Routes.allowedMethods())
app.use(Routes.routes())

// start server
app.listen(process.env.PORT || 8080)
