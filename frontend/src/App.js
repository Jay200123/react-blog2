import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

//get images from github repo

export default App;