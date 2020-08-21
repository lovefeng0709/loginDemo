import React, { Component} from 'react';
import {Link} from 'react-router-dom'
export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Login功能</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to="/signIn" className="nav-link">注册</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}