import React from 'react';
import '../../../index.js';
import { Link as RouterLink } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    MuiButton: {
        color: "white"
    },
}));


export default function ForgotPass() {
    const classes = useStyles();

    return (
        <RouterLink to="/ForgotPassword">
            <div className="MuiInput"
                display="flex"
                align="center">
                <ButtonBase className={ classes.MuiButton }
                    variant="contained"
                    color="secondary">
                    Forgot Password?
                </ButtonBase>
            </div>
        </RouterLink>
    )
}
