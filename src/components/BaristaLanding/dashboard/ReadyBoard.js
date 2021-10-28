import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ReadyOrder from './OrderCards/ReadyOrder';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#9E9E9E',
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
        color: "#17FF00",
        fontWeight: 500
    }
}));

export default function ReadyBoard() {
    const classes = useStyles();

    return (
        <Grid className={ classes.Board } item xs={5}>
            <Grid item >
                <Paper className={ classes.paper } elevation={0} square={ true }>
                    <h6 className={ classes.h6 }>Ready for Takeout</h6>
                </Paper>
            </Grid>
            <Grid container className={ classes.orderContainer } spacing={0}>
                <ReadyOrder />
                <ReadyOrder />
            </Grid>
        </Grid>
    );
}