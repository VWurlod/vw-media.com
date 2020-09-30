import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import About from '../components/About';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero>
        <Banner 
          title="VW-Media.com"
        >
        <Link
          to='/photography'
          className="btn-primary"
        >
          Photography
        </Link>
        </Banner>
      </Hero>
      <About />
      <Footer />
    </>
  )
}
 