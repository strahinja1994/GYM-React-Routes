import React from 'react';
import Header from '../../components/Header';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import FAQs from '../../components/FAQs';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

function Home() {
  return (
    <section className='home'>
      <Header />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer />
    </section>
  )
}

export default Home
