import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
        backgroundColor: "orange",
    },
}));


export default function UserIcon() {
    const classes = useStyles();
    return (
        <Link
            to='/'>
            <Fab size="small" className={classes.fab}>
                <Icon className="material-icons">account_circle</Icon>
            </Fab>
        </Link>
    )
}