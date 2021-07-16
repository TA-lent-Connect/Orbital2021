import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mainListItems } from '../components/ProfListItems';
import ListingStudent from '../components/ListingStudent'
import listingService from '../services/listings'
import Logo from '../components/logo.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ViewListingStudent from '../components/ViewListingStudent';
import Tooltip from '@material-ui/core/Tooltip';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import HistoryIcon from '@material-ui/icons/History';


const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  taButton: {
    marginRight: theme.spacing(0),
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
}));

export default function PageMyModulesStudent({user, logout, modules, listings, setListings, listingToEdit, setListingToEdit}) {
  const classes = useStyles();

  const [byAlpha, setByAlpha] = useState(false)

  const toggleAlpha = () => {
    setByAlpha(!byAlpha)
  }

  const alphaCompare = (l1, l2) => {
    if (l1.module < l2.module) {
      return -1;
    }
    else if (l1.module > l2.module) {
      return 1;
    }
    return 0;
  }

  const addListing = (listingObject) => {
    listingService
      .create(listingObject)
      .then(returnedListing => {
        setListings(listings.concat(returnedListing))
      })
  }

  const editListing = (id, listingObject) => {
    listingService
      .update(id, listingObject)
      .then(returnedListing => {
        setListings(listings.map(listing => listing.id !== id ? listing : returnedListing))
      })
  }

  const deleteListing = (id) => {
    listingService
      .destroy(id)
      .then(setListings(listings.filter(listing => {
          return listing.id === id
        }))
      )
  }

  const myListings = byAlpha ? listings.filter(listing => {
    if (user !== undefined) {
      return (listing.subscribers.filter(sub => sub === user.username).length === 1)
    }
  }).sort(alphaCompare) : listings.filter(listing => {
    if (user !== undefined) {
      return (listing.subscribers.filter(sub => sub === user.username).length === 1)
    }
  }).reverse() 


  // const myListings = listings.filter(listing => {
  //   if (user !== undefined) {
  //     return (listing.subscribers.filter(sub => sub === user.username).length === 1)
  //   }
  // })

  console.log(listings)


  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <Typography variant="body2" noWrap>
                  <br></br>
                  {user !== undefined ? user.name : null} | {user !== undefined ? user.accountType : null}
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
              <Route path="/mymodules">
                <Grid container spacing={3} alignItems="center">
                <Grid item xs={12}>
                    {byAlpha ? (
                      <Tooltip title="Sort by Newest">
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={toggleAlpha}
                      >
                        <HistoryIcon />
                      </IconButton>
                    </Tooltip> ) : (
                      <Tooltip title="Sort by Alphabetical Order">
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={toggleAlpha}
                      >
                        <SortByAlphaIcon />
                      </IconButton>
                    </Tooltip>
                    )}
                  </Grid>
                    {myListings.map((listing, index) => (
                      <ListingStudent key={index} user={user} listing={listing} setListingToEdit={setListingToEdit} listings={listings} setListings={setListings} />
                    ))}
                </Grid>
              </Route>
              <Route path="/">
                <Grid container spacing={3} alignItems="center">
                <Grid item xs={12}>
                    {byAlpha ? (
                      <Tooltip title="Sort by Newest">
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={toggleAlpha}
                      >
                        <HistoryIcon />
                      </IconButton>
                    </Tooltip> ) : (
                      <Tooltip title="Sort by Alphabetical Order">
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={toggleAlpha}
                      >
                        <SortByAlphaIcon />
                      </IconButton>
                    </Tooltip>
                    )}
                  </Grid>
                    {myListings.map((listing, index) => (
                      <ListingStudent key={index} user={user} listing={listing} setListingToEdit={setListingToEdit} listings={listings} setListings={setListings} />
                    ))}
                </Grid>
              </Route>
            </Switch>
          </Router>
      </main>
    </div>
  );
}