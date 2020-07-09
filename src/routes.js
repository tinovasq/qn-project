// import { GenerateHTMLPage } from './logic'
import Router from '@koa/router'

const router = new Router()

var products = new Array()
// products.push({
//   id: 1,
//   image_url: '',
//   name: 'JSON file parser',
//   description: 'A small program that parses JSON files',
// })

router.post('/product', async (ctx) => {
  if (products.find((p) => p.id === ctx.request.body.id) == undefined) {
    let tmp = {
      id: ctx.request.body.id,
      image_url: ctx.request.body.image_url,
      name: ctx.request.body.name,
      description: ctx.request.body.description,
    }
    products.push(tmp)
    ctx.status = 201
  } else {
    ctx.status = 403
  }
})

router.get('/product', async (ctx) => {
  ctx.body = products
  ctx.status = 200
})

router.get('/product/:id', async (ctx, id) => {
  let target = products.find((p) => p.id == ctx.params.id)
  if (target != null) {
    ctx.body = target
    ctx.status = 200
  } else {
    ctx.status = 404
  }
})

router.put('/product/:id', async (ctx) => {
  var target = products.find((p) => p.id == ctx.params.id)
  if (target != null) {
    target.id = ctx.request.body.id
    target.image_url = ctx.request.body.image_url
    target.name = ctx.request.body.name
    target.description = ctx.request.body.description
    ctx.status = 201
  } else {
    ctx.status = 404
  }
})

router.delete('/product/:id', async (ctx) => {
  const ind = products.findIndex((p) => p.id == ctx.params.id)
  if (products.length > ind) {
    products.splice(ind, 1)
    ctx.status = 205
  } else {
    ctx.status = 404
  }
})

export default router
