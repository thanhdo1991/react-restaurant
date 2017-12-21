import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// Layout.
import Header from './layout/Header'
import Footer from './layout/Footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
