import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';

//Icons
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';


const useStyles = makeStyles(theme => ({
  card: {
    maxHeight: 170,
    minHeight: 170,
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    padding: 16
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  DrinkIcons: {
    fontSize: "large"
  },
  TimerWrapper: {
    textAlign: 'center',
  },

}));


export default function IncomingOrderGrid() {
const classes = useStyles();


  return (
    <Grid item xs={12}>
      <Card className={classes.card} >
        <CardContent>
          <CardContent align="center">
            <Typography align="center">
                Placeholder<br/>
                for Media <br/> 
            </Typography>
          </CardContent>
          <CardContent align="center">
            <br/>
            <b>Name of Drink</b>
          </CardContent>
        </CardContent>
          <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="subtitle1">
              <b>OrderID:</b> 12345-55133 <br/>
              <b>Ordered by:</b> Vasileios Georgopoulos
            </Typography>
            <Typography variant="subtitle1">
              <b>Specs:</b> Grande - No Milk - 2x Sugar
            </Typography>
          </CardContent>
          <CardActions align="center">
            <IconButton>
              <NotificationImportantIcon/>
            </IconButton>
            <IconButton>
              <CancelIcon/>
            </IconButton>
            <IconButton>
              <DoneIcon/>
            </IconButton>
          </CardActions>
        </div>
      </Card>
    </Grid>

  );
}