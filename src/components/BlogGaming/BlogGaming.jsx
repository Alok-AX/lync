import React from 'react';

import blogchain1 from '../../assets/blog-chain-1.png'
import blogchain2 from '../../assets/blog-chain-2.png'
import blogchain3 from '../../assets/blog-chain-3.png'
import blogchain4 from '../../assets/blog-chain-4.png'
import blogchain5 from '../../assets/blog-chain-5.png'

const BlogGaming = () => {
  return (
    <div className='blog-chain-section'>
        <div className="container">
            <h2>Making blockchain gaming <br /> accessible to <span>everyone!</span></h2>
            <div className="blog_chain_img_row">
                <img src={blogchain1} alt="" />
                <img src={blogchain2} alt="" />
                <img src={blogchain3} alt="" />
                <img src={blogchain4} alt="" />
                <img src={blogchain5} alt="" />
            </div>
        </div>
    </div>
  )
}

export default BlogGaming