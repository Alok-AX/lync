import React from 'react'

import HeroHeading from '../components/HeroHeading/HeroHeading'

const Hero = () => {
  return (
     <section className='banner_section'>
        <div className='container'>
          <div className="row">
              <HeroHeading/>
          </div>
      </div>
     </section>
  )
}

export default Hero