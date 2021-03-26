import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Doctor from '../component/Doctor';
import Appointment from '../component/Appointment';

class Doctorpage extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb title={'Doctor'} discription={'Doctor Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />
        <main id="main">
          <Doctor />
          <Appointment />
        </main>
      </div>
    )
  }
}
export default Doctorpage;