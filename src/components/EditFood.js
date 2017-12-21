import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

import cookie from 'react-cookies'

export default class EditFood extends Component {
  constructor(props) {
    super(props);
    const {match} = this.props;
    const foodDetail = cookie.load('foods').filter(function (f) {
        return f.id === match.params.id;
    })[0];

    this.state = foodDetail;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let arr = [];
    arr[0] = this.state;
    const newArr = cookie.load('foods').map(obj => arr.find(o => o.id === obj.id) || obj);
    cookie.save('foods', newArr, {path: '/'});

    this.props.history.push("/");

    event.preventDefault();
  }

  render() {

    return (
      <div>
        <header>
          <div className="container">
            <div className="inner-padding">
              <h1 className="left text-left"><strong>Restaurant Menus</strong></h1>
              <div className="text-right">
                <Link className="btn btn-blue no-margin" to="/">Back to home</Link>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="inner-padding">
            <form onSubmit={this.handleSubmit}>
              <label>Enter title:</label>
              <input
                name="title"
                type="text"
                placeholder="Enter title ..."
                value={this.state.title}
                onChange={this.handleInputChange} />

              <label>Enter link image</label>
              <input
                name="image"
                type="url"
                placeholder="Enter link image ..."
                value={this.state.image}
                onChange={this.handleInputChange} />

              <label>Enter description: </label>
              <textarea
                name="description"
                rows="4"
                cols="30"
                placeholder="Enter description ..."
                value={this.state.description}
                onChange={this.handleInputChange} ></textarea>

              <div className="checkBox-group">
                <input
                  id="isNew"
                  type="checkbox"
                  name="isNew"
                  checked={this.state.isNew}
                  onChange={this.handleInputChange} />

                <label className="checkbox-lable" htmlFor="isNew">Is new products?:</label>
              </div>
              <input className="btn btn-blue" type="submit" value="Update product" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
