import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { formatMs, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { mainListItems } from '../components/StudentListItems';
import ListingStudent from '../components/ListingStudent'
import Logo from '../components/logo.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import ViewListingStudent from '../components/ViewListingStudent';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  taButton: {
    marginRight: theme.spacing(2),
  },
  logoutButton: {
    marginLeft: 'auto',
    marginTop: theme.spacing(1),
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
  margin: {
    marginTop: theme.spacing(3),
  },
}));


export default function PageListingsStudent({user, logout, modules, listings, setListings, listingToEdit, setListingToEdit}) {
  const classes = useStyles();
  
  const [newFind, setNewFind] = useState('')


  const handleFindChange = (event) => {
    setNewFind(event.target.value)
  }

  const ListingsToShow = listings.filter(listing => {
    return listing.module.toLowerCase().includes(newFind.toLowerCase().trim()) || listing.title.toLowerCase().includes(newFind.toLowerCase().trim())
  })


  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <Typography variant="body2" noWrap>
                  <br></br>
                  {user.name} | {user.accountType}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <IconButton
                  justifyContent="center"
                  edge="center"
                  className={classes.taButton}
                  color="inherit"
                  href="/mymodules"
                >
                  <img src={Logo} />
                  <Typography variant="h6" noWrap>
                    &nbsp; Lent Connect
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  edge="end"
                  color="inherit"
                  className={classes.logoutButton}
                  onClick={logout}
                >
                  <ExitToAppIcon style={{fill: "white"}}/>
                  <Typography variant="body2" noWrap>
                    &nbsp; Sign Out
                  </Typography>
                </IconButton>
              </Grid>
            </Grid>
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
        <Router>
            <Switch>
              <Route path="/listings/:moduleCode">
                <ViewListingStudent user={user} listing={listingToEdit} listings={listings} setListings={setListings} />
              </Route>
              <Route path="/listings">
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12}>
                    <TextField
                      className={classes.margin}
                      id="input-with-icon-textfield"
                      label="Module Code"
                      value={newFind}
                      onChange={handleFindChange}
                      color="inherit"
                      InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  {ListingsToShow.map((listing, index) => (
                    <ListingStudent key={index} user={user} listing={listing} setListingToEdit={setListingToEdit} listings={listings} setListings={setListings} />
                  ))}
                </Grid>
              </Route>
              <Route path="/">
              <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12}>
                    <TextField
                      className={classes.margin}
                      id="input-with-icon-textfield"
                      label="Module Code"
                      value={newFind}
                      onChange={handleFindChange}
                      color="inherit"
                      InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  {ListingsToShow.map((listing, index) => (
                    <ListingStudent key={index} user={user} listing={listing}  setListingToEdit={setListingToEdit} listings={listings} setListings={setListings} />
                  ))}
                </Grid>
              </Route>
            </Switch>
          </Router>
      </main>
    </div>
  );
}

