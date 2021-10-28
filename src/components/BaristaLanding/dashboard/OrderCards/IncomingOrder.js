import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Timer from 'react-compound-timer'
import CardActions from '@material-ui/core/CardActions';


//Icons
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FlagIcon from '@material-ui/icons/Flag';
import MessageIcon from '@material-ui/icons/Message';
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';



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
    paddingRight: theme.spacing(7),
    textAlign: 'center',
  },

}));

// function createSpecString(specs) {
//   // NEED LIST OF !!!ALL!!! the possible propertes
//   //return specString;
// }

export default function IncomingOrderGrid(props) {
  const classes = useStyles();
  var { name, id } = props.props; 
  var IdString = `OrderID: ${id}  Ordered by: ${name}`;
  var drinkName = `${props.props.drinkName}`;
  // var specs = createSpecString(props.props.specs);
  
  return (
    <Grid item xs={12}>
      <Card className={classes.card} >
        <CardContent>
          <CardContent align="center">
            <LocalBarIcon visibility="visible" className="fa fa-plus-circle" fontSize="default"></LocalBarIcon>
            <LocalCafeIcon visibility="visible" className="fa fa-plus-circle" fontSize="default"></LocalCafeIcon>
            <WhatshotIcon visibility="visible" className="fa fa-plus-circle" fontSize="default"></WhatshotIcon>
            <AcUnitIcon visibility="visible" className="fa fa-plus-circle" fontSize="default"></AcUnitIcon>
          </CardContent>
          <CardContent >
            <Timer className={ classes.TimerWrapper }  startImmediately={true}>
              <Typography align="center">
                Time Elapsed:<br/>
                <Timer.Hours formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`} />
                <Timer.Minutes  formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
                <Timer.Seconds  formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`} />
              </Typography>
            </Timer> 
          </CardContent>
        </CardContent>
          <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography children={drinkName} component="h5" variant="h5"/>
            <Typography variant="subtitle1">
              <b>Specs:</b> Grande - No Milk - 2xSugar
            </Typography>
            <Typography
              variant="subtitle2" 
              color="textSecondary"
              children={IdString} 
            />
          </CardContent>
          <CardActions align="center">
            <IconButton>
              <MessageIcon/>
            </IconButton>
            <IconButton>
              <CancelIcon/>
            </IconButton>
            <IconButton>
              <DoneIcon/>
            </IconButton>
            <FlagIcon visibility="visible" className="fa fa-plus-circle" fontSize="large"></FlagIcon>            
          </CardActions>
        </div>
      </Card>
    </Grid>

  );
}