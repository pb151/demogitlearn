import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Service from '../component/Service';

class Servicepage extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb title={'Service'} discription={'Service Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />
        <main id="main">
          <Service />
        </main>
      </div>
    )
  }
}
export default Servicepage;