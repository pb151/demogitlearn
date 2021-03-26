import React from 'react';

import { BrowserRouter as Router, Route, Switch , NavLink } from "react-router-dom";
import history from '../helpers/history';

class Header extends React.Component {

  state = {
        links: [
            {
                id: 1,
                name: "Home",
                to: "/",
                className: "nav-item",
                isDropdown: false
            },
            {
                id: 2,
                name: "About Us",
                to: "/about",
                className: "nav-item",
                isDropdown: false
            },
            {
                id: 3,
                name: "Service",
                to: "/service",
                className: "nav-item",
                isDropdown: false
            },
            {
                id: 4,
                name: "Department",
                to: "/department",
                className: "nav-item",
                isDropdown: false
            },
            {
                id: 5,
                name: "Doctor",
                to: "/doctor",
                className: "nav-item",
                isDropdown: false
            },
            {
                id: 6,
                name: "Contact",
                to: "/contact",
                className: "nav-item",
                isDropdown: false
            },
        ],
        activeLink: null
    };

    handleClick = id => {
        this.setState({ activeLink: id });
    };

    
  render() {
    return (
    
      <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto"><a href="index.html">Medilab</a></h1>
          <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              {this.state.links.map(link => {
                return (
                    <li key={link.to} className={history.location.pathname === link.to ? 'active' : ''}><NavLink to={link.to} className="nav-link"> {link.name} </NavLink></li>
                )
              })}
              {/* <li><NavLink to={'/about'} className="nav-link"> About </NavLink></li>
              <li><NavLink to={'/service'} className="nav-link">Service</NavLink></li>
              <li><NavLink to={'/department'} className="nav-link">Departments</NavLink></li>
              <li><NavLink to={'/doctor'} className="nav-link">Doctor</NavLink></li>
              <li><NavLink to={'/contact'} className="nav-link">Contact</NavLink></li> */}

            </ul>
          </nav>
          <a href="/doctor#appointment" className="appointment-btn scrollto">Make an Appointment</a>

        </div>
      </header>
      </>

    )
  }
}
export default Header;