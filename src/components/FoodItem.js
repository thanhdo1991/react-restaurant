import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

export default class FoodItem extends Component {
  render() {
    const { food } = this.props;
    const isNew = food.isNew ? <strong className="new">new</strong> : "";
    let image = '';
    let title = '';
    let description = '';

    if (food.image) {
      image = <img src={food.image} alt={food.title} width="283" height="164" />
    }

    if (food.title) {
      title = <h3>{food.title}</h3>
    }

    if (food.description) {
      description = <p>{food.description}</p>
    }

    return (
      <li className="item">
        {isNew}
        {image}
        <div className="item_detail">
          {title}
          {description}
          <div className="text-center">
            <Link className="info" to={food.id + '/edit'}>Update</Link>

            <Link className="info" to={food.id + '/delete'} onClick={(e) => {
              e.preventDefault();
              this.props.removeItem(food.id)
            }}>Delete</Link>
          </div>
        </div>
      </li>
    );
  }
}
