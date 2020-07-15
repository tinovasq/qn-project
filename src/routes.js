// import { GenerateHTMLPage } from './logic'
import Router from '@koa/router'

const router = new Router()

var products = {
  1: {
    id: 1,
    image_url:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FleXdp.jpg%3Fs%3D32%26g%3D1&f=1&nofb=1',
    name: 'test item',
    description: 'an item for testing',
  },
  2: {
    id: 2,
    image_url:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FleXdp.jpg%3Fs%3D32%26g%3D1&f=1&nofb=1',
    name: 'test item REDUX',
    description: 'an item for testing with integrated RGB',
  },
}

router.post('/product', async (ctx) => {
  const newProductID = Object.keys(products).length
  let tmp = {
    id: newProductID,
    image_url: ctx.request.body.image_url,
    name: ctx.request.body.name,
    description: ctx.request.body.description,
  }
  products[newProductID] = tmp
  ctx.status = 201
})

router.get('/product', async (ctx) => {
  ctx.body = products
  ctx.status = 200
})

router.get('/product/:id', async (ctx, id) => {
  const productID = ctx.params.id
  let target = products[productID]
  if (target != undefined) {
    ctx.body = target
    ctx.status = 200
  } else {
    ctx.status = 404
  }
})

router.put('/product/:id', async (ctx) => {
  const productID = ctx.params.id
  var target = products[productID]
  if (target != undefined) {
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
  const productID = ctx.params.id
  if (products[productID] != undefined) {
    delete products[productID]
    ctx.status = 205
  } else {
    ctx.status = 404
  }
})

export default router
