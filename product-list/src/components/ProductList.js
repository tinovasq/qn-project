import React, { Component } from 'react'

import Product from './Product'
import PropTypes from 'prop-types'

class ProductList extends Component {
  render() {
    return this.props.products.map((product) => (
      <Product
        key={product.id}
        product={product}
        deleteProduct={this.props.deleteProduct}
        editProduct={this.props.editProduct}
      />
    ))
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductList
