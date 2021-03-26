import React from 'react';
import Breadcrumb from '../component/Breadcrumb';

import Whyus from '../component/Whyus';
import About from '../component/About';
import Gallery from '../component/Gallery';


class Aboutpage extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb title={'About Us'} discription={'About Us Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />
        <main id="main">
          <Whyus />
          <About />
          <Gallery />
        </main>
      </div>
    )
  }
}
export default Aboutpage;