//import logo from './logo.svg';
import React, { Component } from 'react';

// import { createMuiTheme } from '@material-ui/core/styles';
// import deepOrange from '@material-ui/core/colors/deepOrange';
// import red from '@material-ui/core/colors/deepOrange';

// components

import Drawer from "./layout/drawer"
import Slider from "./layout/slider"


export default class HomePage extends Component {
  render() {
    
    return(
      <div>
        <Drawer/>
        
        <Slider/>
      </div>
    );
    
  }
}


