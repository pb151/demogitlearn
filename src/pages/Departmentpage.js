import React from 'react';
import Breadcrumb from '../component/Breadcrumb';

import Department from '../component/Department';

class Departmentpage extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb title={'Department'} discription={'Department Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />
        <main id="main">
          <Department />
        </main>
      </div>
    )
  }
}
export default Departmentpage;