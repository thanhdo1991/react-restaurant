import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components.
import FoodList from './components/FoodList'
import FoodAdd from './components/FoodAdd'
import FoodEdit from './components/FoodEdit';

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
        <Route path="/" exact component={FoodList}/>
        <Route path="/add" exact component={FoodAdd}/>
        <Route path="/:id/edit" component={FoodEdit}/>
        <Route component={pageNotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
), document.getElementById('root'));
