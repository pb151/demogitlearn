import React from 'react';
import { Servicelists } from "../data/Servicelists";

class Service extends React.Component {
  render() {
    return (
    
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row">
            {Servicelists.map((Servicelist, key) => {
              return (
                <div key={Servicelist.id} className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                  <div className="icon-box">
                    <div className="icon"><i className={Servicelist.iconClass}></i></div>
                    <h4><a href="">{Servicelist.title}</a></h4>
                    <p>{Servicelist.sortDesc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      

    )
  }
}
export default Service;