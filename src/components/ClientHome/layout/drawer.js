import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';
import HistoryTwoToneIcon from '@material-ui/icons/HistoryTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';

//import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';


// import sd1 from './Special Drink 1.png';
// import sd2 from './Special Drink 2.png';
// import sd3 from './Special Drink 3.png';
// import sd4 from './Special Drink 4.png';

// const slider = (
//   <AwesomeSlider cssModule={AwsSliderStyles}>
//     <div data-src={sd1}>
//       <p>Special Drink 1</p>
//     </div>
//     <div data-src={sd2}>
//       <p>Special Drink 2</p>
//     </div>
//     <div data-src={sd3}>
//       <p>Special Drink 3</p>
//     </div>
//     <div data-src={sd4}>
//       <p>Special Drink 4</p>
//     </div>
//   </AwesomeSlider>
// );

const drawerWidth = 240;



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: deepOrange[100],
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: primary,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{ background: '#ff7043' }} position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            Book Club Online Ordering
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List component="nav" aria-label="online ordering">
        <ListItem button>
          <ListItemIcon>
            <HomeTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalCafeTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Order" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HistoryTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HelpTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
      </List>
        
      </Drawer>
      
    </div>
  );
}