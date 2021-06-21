import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Module from '../components/Module'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { mainListItems } from '../components/ProfListItems';
import PeopleIcon from '@material-ui/icons/People';
import Logo from '../components/logo.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
    fixedHeight: {
    height: 240,
  },
}));

export default function PageModules({modules}) {
  const classes = useStyles();

  const [newFind, setNewFind] = useState('')

  const handleFindChange = (event) => {
    setNewFind(event.target.value)
  }

  const modulesToShow = modules.filter(module => {
    return module.moduleCode.includes(newFind)
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <ListItem button>
      <ListItemIcon>
      <img src={Logo} />
      </ListItemIcon>
      <h2>  Lent Connect</h2>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
      <ExitToAppIcon style={{fill: "white"}}/>
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>

          {/* <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <List>{mainListItems}</List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
          <div>
            <h1>Modules</h1>
            <form>
              <label>
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Module Code"
                  value={newFind}
                  onChange={handleFindChange}
                  InputProps={{
                  startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                   ),
                  }}
                />
              </label>
            </form>
            {" "}
            <div>
            <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
             {/* Chart */}
             <Grid item xs={12} md={8} lg={9}>
               <Paper>
               {/* {modulesToShow.map(module => 
                <Module key={module.moduleCode} module={module} />
              )} */}
               </Paper>
             </Grid>
             {/* Recent Deposits */}
             <Grid item xs={12} md={4} lg={3}>
               <Paper>
               </Paper>
             </Grid>
             {/* Recent Orders */}
             <Grid item xs={12}>
               <Paper>
               </Paper>
             </Grid>
           </Grid>
         </Container>
            </div>
          </div>
      </main>
    </div>
  );
}