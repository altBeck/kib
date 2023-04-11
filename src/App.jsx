import React from 'react';

import { Navbar, Header, Product, Services, Work, Footer } from './components';

import './App.css';


const App = () => {

  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <Work />
        <Product />
        <Services />
        <Footer />
      </div>
    </div>
  )
}

export default App
