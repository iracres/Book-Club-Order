import React from "react"
import { Link } from "react-router-dom"
import { Icon } from '@material-ui/core';
import { Button }  from '@material-ui/core';


//! Buttons appear broken
//!     This was caused by the use of the Button component 
//!     instead of the preexisting <a> anchor HTML element
//!     To be dealt with when beautifying the page
//!     Functionality remains intact
function NavStock(props) {
    return (
        <div>
            <nav>
                <div className="nav-wrapper black">
                    <Link to="/BaristaHome" className="brand-logo left"><Icon className="material-icons">arrow_back</Icon></Link>
                    <ul className="right">
                        <li><Button className="waves-effect waves-light btn orange" onClick={() => props.restockAll()}>Restock All</Button></li>
                        <li><Button className="waves-effect waves-light btn orange" onClick={() => props.EspressoDown()}>Espresso Down</Button></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavStock