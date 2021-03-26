import React from 'react';

class Count extends React.Component {
  render() {
    return (
    
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="icofont-doctor-alt"></i>
                <span data-toggle="counter-up">85</span>
                <p>Doctors</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="icofont-patient-bed"></i>
                <span data-toggle="counter-up">18</span>
                <p>Departments</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-laboratory"></i>
                <span data-toggle="counter-up">8</span>
                <p>Research Labs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="icofont-award"></i>
                <span data-toggle="counter-up">150</span>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

    )
  }
}
export default Count;