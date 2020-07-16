import './App.css'

import React, { Component } from 'react'

import EditProduct from './components/EditProduct'
import ProductList from './components/ProductList'
import TitleBar from './components/TitleBar'
import assign from 'lodash/assign'
import axios from 'axios'
import omit from 'lodash/omit'

const rootURL = 'http://localhost:8080/product'

class App extends Component {
  state = {
    products: {},
    current_product: null,
  }

  newProduct = () => {
    const newProductID = Object.keys(this.state.products).length + 1
    const newProd = {
      id: newProductID,
      image_url: 'https://via.placeholder.com/350x150',
      name: 'New Product',
      description: 'New Product',
    }
    this.setState((this.state.products[newProductID] = newProd))
    this.postProduct(newProductID)
    this.openProductDialog(newProductID)
  }

  postProduct = async (id) => {
    const product = this.state.products[id]
    await axios.post(rootURL, product)
    await this.fetchProducts()
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
        <TitleBar newProduct={this.newProduct} />
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
