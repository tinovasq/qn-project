import React, { Component } from 'react'

import Product from './Product'
import map from 'lodash/map'

class ProductList extends Component {
  render() {
    return map(this.props.products, (product) => (
      <Product
        key={product.id}
        product={product}
        deleteProduct={this.props.deleteProduct}
        editProduct={this.props.editProduct}
        openProductDialog={this.props.openProductDialog}
      />
    ))
  }
}

export default ProductList
