import React from 'react';
import '../../../index.js';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';



function signupBtn() {
    return (
        <RouterLink to="/SignUp">
            <div className="MuiInput"
                display="flex"
                align="center">
                    <Button className="MuiButton"
                        variant="contained"
                        color="secondary">
                        Sign Up
                    </Button>
            </div>
        </RouterLink>
    )
}

export default signupBtn