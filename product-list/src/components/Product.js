import React, { Component } from 'react'

import PropTypes from 'prop-types'

class Product extends Component {
  render() {
    const { id, image_url, name, description } = this.props.product
    return (
      <div
        style={{
          background: '#f4f4f4',
          padding: '20px',
          borderBottom: '1px #CCC solid',
          textDecoration: 'none',
          align: 'center',
        }}
      >
        <img
          style={{ display: 'inline-block' }}
          src={image_url}
          width="60"
          alt="Product"
        />
        <div style={{ marginLeft: '15px', display: 'inline-block' }}>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div style={{ display: 'inline-block', marginLeft: '20px' }}>
          <button
            onClick={this.props.editProduct.bind(
              this,
              id,
              image_url,
              name + ' (edited)',
              description
            )}
            style={{ marginBottom: '10px' }}
          >
            Edit
          </button>
          <br />
          <button onClick={this.props.deleteProduct.bind(this, id)}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}

Product.propTypes = {
  products: PropTypes.object.isRequired,
}

export default Product
