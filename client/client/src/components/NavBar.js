import React, { Component } from 'react';
import {Link} from "react-router-dom";
export default class NavBar extends Component {
  constructor(){
    super();
    this.state = {showMenu:false,};
  }
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light static-top mb-0 shadow"
        style={{ backgroundColor: "#50C878" }}
      >
       
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            <h3>
              <span style = {{fontSize: "2rem",}}>
                🍎
              </span>
            </h3>
          </Link>
          <button className = "navbar-toggler" type="button" onClick = {()=>{this.setState({showMenu: !this.state.showMenu,})}} data-bs-toggle="collapse" data-bs-target = "#navDropdown" aria-expanded="false">
            <span className = "navbar-toggler-icon"></span>
          </button>
          <div className={(this.state.showMenu) ? "collapse navbar-collapse show": "collapse navbar-collapse"} id = "navDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{
                    fontSize: "0.2rem",
                    color: "white",
                  }}
                >
                  <button type="button" className="btn btn-info">
                    Calorie Info
                  </button>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/create"
                  style={{
                    fontSize: "0.2rem",
                    color: "white",
                  }}
                >
                  <button type="button" className="btn btn-danger">
                    ➕ Add food
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/user"
                  style={{
                    fontSize: "0.2rem",
                    color: "white",
                  }}
                >
                  <button type="button" className="btn btn-warning">
                    👤 Add User
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
