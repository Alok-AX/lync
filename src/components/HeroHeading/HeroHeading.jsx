import React from 'react';
import whiteArrow from '../../assets/white-arrow.svg'

import img1 from '../../assets/icon-1.svg';
import img2 from '../../assets/icon-2.svg'
import img3 from '../../assets/icon-3.svg'


const HeroHeading = () => {
  return (
    <div className='hero_heading'>
        <h1>Launch Your Game <br />
            on  <span>Web 3.0</span> in Minutes
        </h1>
        <h5>We help game developers to launch their game on Web 3.0, by keeping <br /> blockchain complexities aside with WebWorld SDKs!</h5>
        <div className="hero_btn_row d-flex justify-content-center gap-md-5">
            <a href="#" className='hero_first_btn'>Get started <img src={whiteArrow} alt="" /></a>
            <a href="#" className='hero_second_btn'>View Docs <img src={whiteArrow} alt="" /></a>
        </div>

        <div className="backed_by_col">
            <h5>Backed by</h5>
            <div className="backed_by_col_img">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroHeading