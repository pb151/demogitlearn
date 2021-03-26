import React from 'react';
import { Link } from "react-router-dom";

class Breadcrumb extends React.Component {
  render() {
    return (
    
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{this.props.title}</h2>
          <ol>
            <li><Link to={'/'}>Home</Link></li>
            <li>{this.props.title}</li>
          </ol>
        </div>
      </div>
    </section>

    )
  }
}
export default Breadcrumb;