import React from 'react';
import '../../../index.js';
import Button from '@material-ui/core/Button';
import {Link as RouterLink} from 'react-router-dom';


function loginBtn(){
        return (
            <RouterLink to="/BaristaHome">
                <div className="MuiInput"
                    display="flex"
                    align="center">
                    <Button className="MuiButton"
                        variant="contained"
                        color="secondary">
                        Login
                    </Button>
                </div>
            </RouterLink>
        )
    }

export default loginBtn