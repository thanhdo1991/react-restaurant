import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

export default class FoodItem extends Component {
  render() {
    const { food } = this.props;
    const isNew = food.isNew ? <strong className="new">new</strong> : "";

    return (
      <li className="item">
        {isNew}
        <img src={food.image} alt={food.title} width="283" height="164" />
        <div className="item_detail">
          <h3>{food.title}</h3>
          <p>{food.description}</p>
          <div className="text-center">
            <Link className="info" to={food.id + '/edit'}>Update</Link>
            <Link className="info" to={food.id + '/delete'}>Delete</Link>
          </div>
        </div>
      </li>
    );
  }
}
