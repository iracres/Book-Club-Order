import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(),
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
}));

const addNewOrder = () => {
    console.log(document)
}

export default function OrderButton() {
    const classes = useStyles();

    return (
        <Fab
            onClick={ addNewOrder }
            color="primary" 
            aria-label="add"
            className={classes.fab}>
            <AddIcon />
        </Fab>
    );
}
