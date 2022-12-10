import "./BrandBox.css";
import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

const BrandBox = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => {
          return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
        }
      };
  
  return (
    <>
    <div className='company-main-container'>
        <div className='company-container'>
            
        <div className='company-heading'>
            <h2>Trusted by <span className='company-heading-span'>150+ </span>companies</h2>
        </div>
        <p className='company-para company-para'>Lorem Ipsum is simply dummy text of the printing and typese tting </p>
        <br/>
<p className="company-para1">indus orem Ipsum has beenthe standard dummy.</p>
        </div>

    <Slider {...settings}>
        <div className="divflex">
        <div>
          <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/spoty.png" alt="img"></img>
        </div>
        <div>
          <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/shopboat.png" alt="img"></img>
        </div>
        <div>
          <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/paypal.png" alt="img"></img>
        </div>
        </div>
        <div className="divflex">
          <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/slack.png" alt="images"></img>
          <img src="http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/envato.png" alt="images"></img>
        </div>
        {/* <div className="divflex">
          <h3>3</h3>
        </div> */}
       
      </Slider>

    </div>
    </>
  )
}

export default BrandBox;