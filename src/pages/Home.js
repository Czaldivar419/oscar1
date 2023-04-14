import React from 'react'

import Header from '../components/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Vendors from '../components/Vendors';
import ContactUs from '../components/Contact';
import Map from '../components/Map';

function Home () {
  return (
    <>
    <Header/>
    <Banner/>
    <Services/>
    <About/>
    <Vendors/>
    <Testimonials/>
    <ContactUs/>
    <Map/>
    <Footer/>
    </>
  );
  }

  export default Home;