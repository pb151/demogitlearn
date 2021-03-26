import React from 'react';
import { Doctorlists } from "../data/Doctorlists";

class Doctor extends React.Component {

 
  

  render() {
    return (
    
      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <h2>Doctors</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row">
            {Doctorlists.map((data, key) => {
              return (
                <div className="col-lg-6" key={data.id}>
                  <div className="member d-flex align-items-start">
                    <div className="pic"><img src={data.image} className="img-fluid" alt="" /></div>
                    <div className="member-info">
                    <h4>{data.name}</h4>
                      <span>{data.position}</span>
                      <p>{data.sortdesc}</p>
                      <div className="social">
                        <a href=""><i className="ri-twitter-fill"></i></a>
                        <a href=""><i className="ri-facebook-fill"></i></a>
                        <a href=""><i className="ri-instagram-fill"></i></a>
                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                      </div>
                    </div>
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
export default Doctor;