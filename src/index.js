import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components.
import ListFood from './components/ListFood'
import AddFood from './components/AddFood'
import EditFood from './components/EditFood';

import './css/reset.css'
import './css/base.css'
import './css/header.css'
import './css/style.css'

// Layout.
import Header from './layout/Header'
import Footer from './layout/Footer'

const pageNotFound = ({ location }) => (
  <div className="container" style={{padding: '50px 0'}}>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

render((
  <Router>
    <div className="page-wrapper">
      <Header />
      <Switch>
        <Route path="/" exact component={ListFood}/>
        <Route path="/add" exact component={AddFood}/>
        <Route path="/:id/edit" component={EditFood}/>
        <Route component={pageNotFound}/>
      </Switch>
      <Footer />
    </div>
  </Router>
), document.getElementById('root'));
