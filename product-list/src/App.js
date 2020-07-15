import './App.css'

import React, { Component } from 'react'

import EditProduct from './components/EditProduct'
import ProductList from './components/ProductList'
import axios from 'axios'
import omit from 'lodash/omit'

const rootURL = 'http://localhost:8080/product'

class App extends Component {
  state = {
    products: {},
    current_product: null,
  }

  editProduct = (field, value) => {
    this.setState({
      ...this.state,
      current_product: { ...this.state.current_product, [field]: value },
    })
  }

  openProductDialog = (id) => {
    this.setState({
      ...this.state,
      current_product: this.state.products[id],
    })
  }

  closeProductDialog = () => {
    this.setState({
      ...this.state,
      current_product: null,
    })
  }

  saveProduct = async () => {
    const product = this.state.current_product
    await axios.put(`${rootURL}/${product.id}`, product)
    this.setState({ ...this.state, current_product: null })
    await this.fetchProducts()
  }

  deleteProduct = async (id) => {
    const response = await axios.delete(`${rootURL}/${id}`)
    if (response.status === 205) {
      this.setState({
        ...this.state,
        products: omit(this.state.products, id),
      })
    }
  }

  fetchProducts = async () => {
    const response = await axios.get(rootURL)
    this.setState({
      ...this.state,
      products: response.data,
    })
  }

  componentWillMount() {
    this.fetchProducts()
  }

  render() {
    return (
      <div className="App">
        <ProductList
          products={this.state.products}
          editProduct={this.editProduct}
          deleteProduct={this.deleteProduct}
          openProductDialog={this.openProductDialog}
        />
        <EditProduct
          product={this.state.current_product}
          editProduct={this.editProduct}
          saveProduct={this.saveProduct}
          closeProductDialog={this.closeProductDialog}
        />
      </div>
    )
  }
}

export default App
