import React, { Component } from 'react'

import PropTypes from 'prop-types'

class Product extends Component {

  editProduct(e) {
    // TODO: implement put request
  }

  deleteProduct(e) {
    // TODO: implement delete request
  }

  render() {
    return (
      <div style={{
        background: '#f4f4f4',
        padding: '20px',
        borderBottom: '1px #CCC solid',
        textDecoration: 'none',
        align: 'center'
      }}>
        <img style={{display: 'inline-block'}}src={this.props.product.image_url} width="60" alt="Product"/>
        <div style={{marginLeft: "15px", display: "inline-block"}}>
          <h1>{ this.props.product.name }</h1>
          <p>{ this.props.product.description }</p>
        </div>
        <div style={{display: "inline-block", marginLeft: "20px"}}>
          <button onClick={this.editProduct} style={{marginBottom: "10px"}}>Edit</button>
          <br />
          <button onClick={this.deleteProduct}>Delete</button>
        </div>
      </div>
    )
  }
}

Product.propTypes = {
  products: PropTypes.object.isRequired
}

export default Product
