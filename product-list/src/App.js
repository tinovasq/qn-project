import './App.css';

import React, { Component } from 'react';

import ProductList from './components/ProductList'

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        image_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FleXdp.jpg%3Fs%3D32%26g%3D1&f=1&nofb=1',
        name: 'test item',
        description: 'an item for testing'
      },
    ],
  }
  render(){
    return (
      <div className="App">
        <ProductList products={this.state.products}/>
      </div>
    );
  }
}

export default App;
