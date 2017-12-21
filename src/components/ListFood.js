import React, { Component } from 'react';
import FoodList from '../components/FoodList'
import {
  Link
} from 'react-router-dom'
import cookie from 'react-cookies'

// Data.
import FoodAPI from '../api';

export default class ListFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
       foods: []
    }

    console.log(cookie.load('foods'));
 };

  componentDidMount() {
    if (!cookie.load('foods')) {
      cookie.save('foods', FoodAPI.all())
      this.setState({foods: FoodAPI.all()})
    } else {
      this.setState({foods: cookie.load('foods')})
    }
  }

  componentDidUpdate() {

  }

  render() {

    return (
      <div>
        <header>
          <div className="container">
            <div className="inner-padding">
              <h1 className="left text-left"><strong>Restaurant Menus</strong></h1>
              <div className="text-right">
                <Link className="btn btn-blue no-margin" to="/add">Add new</Link>
              </div>
            </div>
          </div>
        </header>
        <FoodList foods={this.state.foods} />
      </div>
    )
  }
}
