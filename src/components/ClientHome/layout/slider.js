
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';
import React, { Component } from 'react';

import {Box } from '@material-ui/core';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sd1 from './Special Drink 1.png';
import sd2 from './Special Drink 2.png';
import sd3 from './Special Drink 3.png';
import sd4 from './Special Drink 4.png';


export default class SimpleSlider extends Component {
    state = {
        display: true,
        width: 600
      };

    render() {
        var settings = {
            className: "special drink",
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            //adaptiveHeight: true
        }
      return (
      
      <Box
        //bgcolor="grey.700"
        justifyContent="center"
        width="50%"
        height="100%"
        color="white"
        p={1}
        m={1}
        position="absolute"
        top={70}
        left="20%"
        
      >
        <div>
          
          <div
            style={{
              width: this.state.width + "px",
              display: this.state.display ? "block" : "none"
            }}
          ></div>
            <Slider {...settings}>
            <div>
              <img alt="" src={sd1} width="500px" height="500px"/>
              <Box color="white" bgcolor="palevioletred" p={1}>
                Special Drink 1
            </Box>
            </div>
            <div>
              <img alt="" src={sd2} width="500px" height="500px" />
              <Box color="white" bgcolor="palevioletred" p={1}>
                Special Drink 2
            </Box>
            </div>
            <div>
              <img alt="" src={sd3} width="500px" height="500px"/>
              <Box color="white" bgcolor="palevioletred" p={1}>
                Special Drink 3
            </Box>
            </div>
            <div>
              <img alt="" src={sd4} width="500px" height="500px"/>
              <Box color="white" bgcolor="palevioletred" p={1}>
                Special Drink 4
            </Box>
            </div>
            </Slider>
          </div>
        </Box>
   
      );
    }
  }