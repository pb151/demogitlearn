import React from 'react';
import Breadcrumb from '../component/Breadcrumb';
import Contact from '../component/Contact';
import Faq from '../component/Faq';

class Aboutpage extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb title={'Contact'} discription={'Contact Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />
        <main id="main">
          <Contact />
          <Faq />
        </main>
      </div>
    )
  }
}
export default Aboutpage;