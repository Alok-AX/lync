import React from 'react';

import bluestar from '../../assets/blueStar.png'
import diamond from '../../assets/diamond.png'

const Complexities = () => {
  return (
    <div className='complexities_main_box'>
        <div className="row">
            <div className="col-lg-8">
                <h4>Don't Worry about the <span>Web3</span> Complexities</h4>
                <ul>
                    <li>
                        <img src={bluestar} alt="bluestar" />
                        <h5>Save 9-12 months of development time</h5>
                    </li>
                    <li>
                        <img src={bluestar} alt="bluestar" />
                        <h5>Focus completely on Game Dev and Mechanics </h5>
                    </li>
                    <li>
                        <img src={bluestar} alt="bluestar" />
                        <h5>Save Up to $500K+ on Salaries & Smart Contract Auditing</h5>
                    </li>
                    <li>
                        <img src={bluestar} alt="bluestar" />
                        <h5>Go Cross-Chain in a few clicks</h5>
                    </li>
                </ul>
            </div>
            <div className="col-lg-4">
                <div className="complexcity_right_img">
                    <img src={diamond} alt="diamond"  class="infinite-up-down"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Complexities