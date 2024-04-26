import React from 'react';
import img from '../../assets/user.png'

const ReviewCard = () => {
  return (
    <div className='review_card_wrapper'>
        <div className="review_card_wrap">
            <p>Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!</p>
            <div className="review_card_wrap_user">
                <img src={img} alt="" />
                <div className="review_card_wrap_user_content">
                    <h6>Alex George</h6>
                    <p>CEO, Polygon</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard