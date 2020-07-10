import './App.css'

import React, { Component } from 'react'

import ProductList from './components/ProductList'
import axios from 'axios'

const rootURL = 'http://localhost:8080/product/'

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        image_url:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FleXdp.jpg%3Fs%3D32%26g%3D1&f=1&nofb=1',
        name: 'test item',
        description: 'an item for testing',
      },
      {
        id: 2,
        image_url:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FleXdp.jpg%3Fs%3D32%26g%3D1&f=1&nofb=1',
        name: 'test item REDUX',
        description: 'an item for testing with integrated RGB',
      },
    ],
  }

  editProduct = (id, image_url, name, description) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id === id) {
          product.image_url = image_url
          product.name = name
          product.description = description
        }
        return product
      }),
    })
  }

  deleteProduct = (id) => {
    axios.delete(rootURL + id.toString()).then((response) => {
      if (response.status === 205) {
        this.setState({
          products: [...this.state.products.filter((p) => p.id !== id)],
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <ProductList
          products={this.state.products}
          editProduct={this.editProduct}
          deleteProduct={this.deleteProduct}
        />
      </div>
    )
  }
}

export default App
