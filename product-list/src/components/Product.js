import React, { Component } from 'react'

import PropTypes from 'prop-types'

class Product extends Component {
  render() {
    return (
      <div>
        <p>{this.props.product.name}</p>
      </div>
    )
  }
}

Product.propTypes = {
  products: PropTypes.object.isRequired
}

export default Product
