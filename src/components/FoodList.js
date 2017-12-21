import React, { Component } from 'react';
import FoodItem from './FoodItem';

export default class FoodList extends Component {
  render() {
    let items = [];

    if (this.props.foods) {
      items = this.props.foods.map((food, key) => <FoodItem key={key} food={food} /> )
    }

    return (
      <div className="container">
        <div className="our_menu">
          <ul className="menu">
            {items}
          </ul>
        </div>
      </div>
    );
  }
}
