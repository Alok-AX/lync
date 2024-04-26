import React from 'react';
import BlogSlide from '../components/Blog/BlogSlide';
const BlogSlider = () => {
  return (
     <section className='blogslider_section '>
        <div className="container">
             <div className="fav_chain_heading">
                <h2>From our<span> Blog</span></h2>
                <h6>Level Up Your Web3 Gaming Experience: Explore Our <br /> Blog for Insights, Tips, and Innovations in Gaming SDKs!</h6>
            </div>
            <BlogSlide/>
        </div>


     </section>
  )
}

export default BlogSlider