import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IncomingOrder from './OrderCards/IncomingOrder';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#424242',
        fontStyle: 'italic',
        fontWeight: 500,
    },
    orderContainer: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        fontStyle: 'italic',
        fontWeight: 500,
    },
    h6: {
        color: '#FF6C00',
        fontWeight: 500
    }
}));

const orderProps = {
    name: "Vasileios Georgopoulos",
    id: "12345-55133",
    drinkName: "HotChocolate",
    completionTime: null,
    specs: {
        size: "Grande",
        milk: "No Milk",
        sugar: "2x Sugar",
    }
}

export default function IncomingBoard() {
    const classes = useStyles();
    
    return (
        <Grid className={classes.Board} item xs={7} >
            <Grid item >
                <Paper className={classes.paper} elevation={0} square={true}>
                    <h6 className={classes.h6}>Incoming Orders</h6>
                </Paper>
            </Grid>
                <Grid container className={classes.orderContainer} spacing={0}>
                    <IncomingOrder props={ orderProps }/>
                    <IncomingOrder props={ orderProps }/>
                </Grid>
        </Grid>
    );
}