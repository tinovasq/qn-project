import { GenerateHTMLPage } from './logic'
import Router from '@koa/router'

const router = new Router()

router.get('/html/:title/:message', async (ctx) => {
  // get query params
  const { title, message } = ctx.params

  // set response
  ctx.body = GenerateHTMLPage(title, message)
  ctx.status = 200
})

router.get('/json/status', async (ctx) => {
  ctx.body = {
    hello: 'world',
    nested: {
      data: {
        here: ['testing', 'array', 'values'],
      },
    },
    success: true,
    value: 1,
  }
  ctx.status = 200
})

export default router
