import React from 'react';

import blog from '../../assets/blog.png'

const BlogCard = () => {
  return (
    <div className='blog_card_wrapper'>
        <div className="blog_card_wrap">
            <img src={blog} alt="blog"/>
            <div className="blog_card_wrap_content">
                <h6>LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮</h6>
                <p>LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC’s SDK and infrastructure.</p>
                <a href="#">Read more</a>
            </div>
        </div>
    </div>
  )
}

export default BlogCard