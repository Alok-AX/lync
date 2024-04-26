import React from 'react'

import ReviewSlider from '../components/Review/ReviewSlider'

const Review = () => {
  return (
    <section className='review_section'>
        <div className="container">
             <div className=" review_heading">
                <h2>Valuable <span> Reviews</span></h2>
            </div>
            <ReviewSlider/>
        </div>
     </section>
  )
}

export default Review