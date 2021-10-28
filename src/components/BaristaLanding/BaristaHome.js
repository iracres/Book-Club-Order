import React from 'react';
// import Navbar from './layout/Navbar'
import MaterialNav from './layout/NavBar'
import IncomingBoard from './dashboard/IncomingBoard'
import ReadyBoard from './dashboard/ReadyBoard'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import OrderButton from './layout/OrderButton';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#E0E0E0",
    height: "100vh",
  },
  Board: {
    backgroundColor: "#E0E0E0",
    height: "100%",
  },
  fab: {
    margin: theme.spacing(1),
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
}));

export default function BaristaHome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MaterialNav />
      <Grid container spacing={0}>
        <IncomingBoard />
        <ReadyBoard />
      </Grid>
      <OrderButton/>
    </div>
  );
}
