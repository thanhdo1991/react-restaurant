import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import cookie from 'react-cookies'

// Components.
import FoodItem from './FoodItem';

// Data.
import FoodAPI from '../api';


export default class FoodList extends Component {
  constructor(props) {
    super(props);

    this.state = {
       foods: []
    }

    this.removeItem = this.removeItem.bind(this);
  };

  removeItem(id){
    const newArr = cookie.load('foods').filter(function (f) {
      return f.id !== id;
    });

    cookie.save('foods', newArr, {path: '/'});

    this.setState({
      foods: cookie.load('foods')
    })
  }

  componentDidMount() {
    if (!cookie.load('foods')) {
      cookie.save('foods', FoodAPI.all())
      this.setState({foods: FoodAPI.all()})
    } else {
      this.setState({foods: cookie.load('foods')})
    }
  }

  render() {
    let items = [];

    if (this.state.foods) {
      items = this.state.foods.map((food, key) => <FoodItem key={key} food={food} removeItem={this.removeItem} /> )
    }

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

        <div className="container">
          <div className="our_menu">
            <ul className="menu">
              {items}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
