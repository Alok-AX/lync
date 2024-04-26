import React,{ Component } from 'react';
import Slider from "react-slick";
import BlogCard from './BlogCard';
import rightarrow from '../../assets/right-arrow.png'
import leftarrow from '../../assets/left-arrow.png'


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={`${className} right_arrow`} onClick={onClick}>

            <img src={rightarrow} alt="" />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} left_arrow`} onClick={onClick}>
        <img src={leftarrow} alt="" />
    </div>
    );
  }

const BlogSlide = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <Slider {...settings}>
        <div>
            <BlogCard/>
        </div>

        <div>
            <BlogCard/>
        </div>
        <div>
            <BlogCard/>
        </div>
        <div>
            <BlogCard/>
        </div>
        <div>
            <BlogCard/>
        </div>
    </Slider>
  )
}

export default BlogSlide