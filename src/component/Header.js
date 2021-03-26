import React from 'react';

import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
    
      <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto"><a href="index.html">Medilab</a></h1>
          <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active"><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link"> About </Link></li>
              <li><Link to={'/service'} className="nav-link">Service</Link></li>
              <li><Link to={'/department'} className="nav-link">Departments</Link></li>
              <li><Link to={'/doctor'} className="nav-link">Doctor</Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>

            </ul>
          </nav>
          <a href="#appointment" className="appointment-btn scrollto">Make an Appointment</a>

        </div>
      </header>
      </>

    )
  }
}
export default Header;