import React from 'react';
import Hero from '../component/Hero';
import Whyus from '../component/Whyus';
import About from '../component/About';
import Count from '../component/Count';
import Service from '../component/Service';
import Appointment from '../component/Appointment';
import Department from '../component/Department';
import Doctor from '../component/Doctor';
import Faq from '../component/Faq';
import Testimonial from '../component/Testimonial';
import Gallery from '../component/Gallery';
import Contact from '../component/Contact';



class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <main id="main">
          <Whyus />
          <About />
          <Count />
          <Service />
          <Appointment />
          <Department />
          <Doctor />
          <Faq />
          <Testimonial />
          <Gallery />
          <Contact />
        </main>
      </div>
    )
  }
}
export default Home;