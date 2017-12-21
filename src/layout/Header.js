import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="freshdesignweb-top">
        <h1>
          <Link to='/'>React Demo</Link>
        </h1>
      </div>
    );
  }
}
