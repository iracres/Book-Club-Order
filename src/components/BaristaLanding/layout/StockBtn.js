import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "orange",
    },
    input: {
      display: 'none',
    },
    text: {
        color: "black",
    },
  }));


export default function StockBtn() {
    const classes = useStyles();
    return (
        <Button variant="contained" className={ classes.button }>
            <Link to='/Restock'>
                <Typography className={ classes.text }>
                    Update Stock
                </Typography>
            </Link>
        </Button>
    )
}
