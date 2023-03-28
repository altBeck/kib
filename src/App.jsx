import React from 'react';

import { Navbar, Header, Product, Services, Footer } from './components';

import './App.css';


const App = () => {

  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <Product />
        <Services />
        <Footer />
      </div>
    </div>
  )
}

export default App
