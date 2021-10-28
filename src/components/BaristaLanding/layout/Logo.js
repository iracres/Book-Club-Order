import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';



export default class Logo extends React.Component {
    // constructor(props) {
    //     super(props);
        // this.calcLogoWidth = this.calcLogoWidth.bind(this);
        // this.updateDimensions = this.updateDimensions.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
        // this.componentWillUnmount = this.componentWillUnmount.bind(this);
        // this.state = {
        //     width: 64,
        //     height: 64
        // }
    // }

    // K-Logo width size calculation
    // calcLogoWidth() {
    //     var nullWidth = document.documentElement.clientWidth;
    //     if (nullWidth <= 600) {
    //         this.setState({width: 53});
    //     }
    //     else {
    //         this.setState({width: 64});
    //     }
    // }


    //   updateDimensions() {
    //     this.setState({ width: window.innerWidth, height: window.innerHeight });
    //   };
    //   componentDidMount() {
    //     window.addEventListener('resize', this.calcLogoWidth);
    //   }
    //   componentWillUnmount() {
    //     window.removeEventListener('resize', this.calcLogoWidth);
    //   }

    render() {
        return (
            <div id="logo_container" >
                <Link to='/'>
                    <HomeIcon color="inherit" fontSize="large"></HomeIcon>
                </Link>
            </div>
        )
    }
}