import Product from './Product'
import React from 'react'
import map from 'lodash/map'

export default function ProductList({
  deleteProduct,
  editProduct,
  openProductDialog,
  products,
}) {
  return map(products, (product) => (
    <Product
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      editProduct={editProduct}
      openProductDialog={openProductDialog}
    />
  ))
}
