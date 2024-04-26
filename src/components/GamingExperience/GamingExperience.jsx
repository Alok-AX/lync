import React from 'react';

import Line from '../../assets/line-1.png'

export default function GamingExperience() {
    
  return (
    <section className='gaming_experience_section'>
        <div className="container">
            <div className="gaming_experience_row">
                <img src={Line} alt="line" />
                <h4>
                LYNC provides a scalable infrastructure for launching web3 <br />
                games, without hampering the <span>gaming experience.</span> <br />
                So that you can deliver the next big hit!
                </h4>
                <img src={Line} alt="line" />
            </div>
        </div>
    </section>
    )
}