import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { mainListItems } from '../components/ProfListItems';
import Logo from '../components/logo.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Pagination from '@material-ui/lab/Pagination';
import ModuleProf from '../components/ModuleProf'
import ViewListing from '../components/ViewListing';
import CreateNewListing from '../components/CreateNewListing'
import listingService from '../services/listings'
import EditListing from '../components/EditListing';
import Listing from '../components/Listing'


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
    fixedHeight: {
    height: 240,
  },
  margin: {
    marginTop: theme.spacing(3),
  },
}));

export default function PageModulesMC({user, logout, modules, listings, setListings, listingToEdit, setListingToEdit}) {
  const classes = useStyles();

  const [page, setPage] = useState(1)
  //const [newFind, setNewFind] = useState('')
  const [newFind, setNewFind] = useState(listingToEdit ? listingToEdit.module : '')

  const addListing = (listingObject) => {
    listingService
      .create(listingObject)
      .then(returnedListing => {
        setListings(listings.concat(returnedListing))
      })
  }

  const editListing = (id, listingObject) => {
    listingService
      .destroy(id)
      .then(setListings(listings.filter(listing => {
          return listing.id === id
        }))
      )

    console.log(listings)

    listingService
      .create(listingObject)
      .then(returnedListing => {
        setListings(listings.concat(returnedListing))
      })

    // listingService
    //   .update(id, listingObject)
    //   .then(returnedListing => {
    //     setListings(listings.filter(listing => {return listing.id === id}).concat(returnedListing))
    //     //setListings(listings.map(listing => listing.id !== id ? listing : returnedListing))
    //   })
  }

  const deleteListing = (id) => {
    listingService
      .destroy(id)
      .then(setListings(listings.filter(listing => {
          return listing.id === id
        }))
      )
  }

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleFindChange = (event) => {
    setNewFind(event.target.value)
  }

  const modulesToShow = modules.filter(module => {
    return module.moduleCode.toLowerCase().includes(newFind.toLowerCase().trim()) || module.title.toLowerCase().includes(newFind.toLowerCase().trim())
  })

  const ListingsToShow = listings.filter(listing => {
    return listing.module.toLowerCase().includes(newFind.toLowerCase().trim()) || listing.title.toLowerCase().includes(newFind.toLowerCase().trim())
  })

  const startArr = (page - 1) * 10
  const endArr = (page) * 10

  const modulesPerPage = modulesToShow.slice(startArr, endArr)


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
                  href="/listings"
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
              <Route path="/mymodules/editlisting">
                <EditListing user={user} editListing={editListing} modules={modules} listingToEdit={listingToEdit} deleteListing={deleteListing} listings={listings} />
              </Route>
              <Route path="/mymodules/createnewlisting">
                <CreateNewListing user={user} addListing={addListing} modules={modules} listings={listings} initialModule={listingToEdit} />
              </Route>
              <Route path="/listings">
              <Router>
                  <Switch>
                    <Route path="/mymodules/editlisting">
                      <EditListing user={user} editListing={editListing} modules={modules} listingToEdit={listingToEdit} deleteListing={deleteListing} listings={listings}/>
                    </Route>
                    <Route path="/listings/:moduleCode">
                      <ViewListing user={user} listing={listingToEdit} setListingToEdit={setListingToEdit} />
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
                          <Listing key={index} listing={listing} setListingToEdit={setListingToEdit} user={user} />
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
                          <Listing key={index} listing={listing} setListingToEdit={setListingToEdit} user={user} />
                        ))}
                      </Grid>
                    </Route>
                  </Switch>
                </Router>
                {/* <PageListingsMC user={user} logout={logout} modules={modules} listings={listings} setListings={setListings} listingToEdit={listingToEdit} setListingToEdit={setListingToEdit} /> */}
              </Route>
              <Route path="/listings/:moduleCode">
                <ViewListing user={user} listing={listingToEdit} setListingToEdit={setListingToEdit} />
              </Route>
              <Route path="/modules">
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
                  <Grid item xs={8}></Grid>
                  <Grid item xs={4}>
                    <Pagination count={parseInt((modulesToShow.length)/10) + 1} page={page} onChange={handlePageChange} color="primary"/>
                  </Grid>
                  {modulesPerPage.map(module => 
                    <ModuleProf key={module.moduleCode} module={module} listings={listings} setListingToEdit={setListingToEdit} />
                  )}
                  <Pagination count={parseInt((modulesToShow.length)/10) + 1} page={page} onChange={handlePageChange} color="primary"/>
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
                  <Grid item xs={8}></Grid>
                  <Grid item xs={4}>
                    <Pagination count={parseInt((modulesToShow.length)/10) + 1} page={page} onChange={handlePageChange} color="primary"/>
                  </Grid>
                  {modulesPerPage.map(module => 
                    <ModuleProf key={module.moduleCode} module={module} listings={listings} setListingToEdit={setListingToEdit} />
                  )}
                  <Pagination count={parseInt((modulesToShow.length)/10) + 1} page={page} onChange={handlePageChange} color="primary"/>
                </Grid>
              </Route>
            </Switch>
          </Router>
      </main>
    </div>
  );
}