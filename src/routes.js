// import { GenerateHTMLPage } from './logic'
import Router from '@koa/router'

var products = require('../data/products.json')
const router = new Router()

// router.get('/html/:title/:message', async (ctx) => {
//   // get query params
//   const { title, message } = ctx.params

//   // set response
//   ctx.body = GenerateHTMLPage(title, message)
//   ctx.status = 200
// })

// router.get('/json/status', async (ctx) => {
//   ctx.body = {
//     hello: 'world',
//     nested: {
//       data: {
//         here: ['testing', 'array', 'values'],
//       },
//     },
//     success: true,
//     value: 1,
//   }
//   ctx.status = 200
// })

router.post('/product', async (ctx) => {
  if (ctx.params.id < products.length()) {
    var tmp = {
      id: ctx.params.id,
      image_url: ctx.params.image_url,
      name: ctx.params.name,
      description: ctx.params.description,
    }
    ctx.body = products.push(tmp)
    ctx.status = 201
  } else {
    ctx.status = 403
  }
})
router.get('/product', async (ctx) => {
  ctx.body = products
  ctx.status = 200
})
router.get('/product/:id', async (ctx) => {
  ctx.body = products.find((p) => p.id === ctx.params.id)
  ctx.status = 200
})
router.put('/product/:id', async (ctx) => {
  var target = products.find((p) => p.id === ctx.params.id)
  if (target != null) {
    target.id = ctx.params.id
    target.image_url = ctx.params.image_url
    target.name = ctx.params.name
    target.description = ctx.params.description
    ctx.status = 201
  } else {
    ctx.status = 404
  }
})
router.delete('/product/:id', async (ctx) => {
  var target = products.find((p) => p.id === ctx.params.id)
  const ind = products.indexOf(target)
  if (target != null) {
    products.splice(ind, 1)
    ctx.status = 205
  } else {
    ctx.status = 404
  }
})

export default router
