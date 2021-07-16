import React, { useState, useEffect } from 'react';
import listingService from '../services/listings'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Tooltip from '@material-ui/core/Tooltip';
import Disqus from "disqus-react"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

const ViewListingStudent = ({ user, listing , listings, setListings}) => {
  const classes = useStyles();
  const history = useHistory();

  const [sub, setSub] = useState(listing.subscribers.filter(sub => sub === user.username).length === 1)

  const editListing = (id, listingObject) => {
    listingService
      .update(id, listingObject)
      .then(returnedListing => {
        setListings(listings.map(listing => listing.id !== id ? listing : returnedListing))
      })
  }


  const handleSubChange = () => {
    setSub(!sub)
    console.log(sub)
    console.log(user)
    console.log(listing)
    if (!sub) {
      const changedSubscribers = listing.subscribers.concat(user.username)
      console.log(changedSubscribers)
      const changedListing = {...listing, subscribers: changedSubscribers}
      editListing(listing.id, changedListing)
    }
    else {
      const indexOfSub = listing.subscribers.indexOf(user.username)
      const changedSubscribers = [...listing.subscribers.slice(0, indexOfSub), ...listing.subscribers.slice(indexOfSub + 1)]
      console.log(changedSubscribers)
      const changedListing = {...listing, subscribers: changedSubscribers}
      editListing(listing.id, changedListing)
    }
  }

  const Unsubscribe = (
    <Tooltip title="Unsubscribe to listing">
      <IconButton variant="outlined" color="primary" onClick={handleSubChange}>
        <FavoriteIcon></FavoriteIcon>
      </IconButton>
    </Tooltip>
  );

  const Subscribe = (
    <Tooltip title="Subscribe to listing">
      <IconButton variant="outlined" color="primary" onClick={handleSubChange}>
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </IconButton>
    </Tooltip>
  )

  const disqusShortname = "ta-lent-connect"
    const disqusConfig = {
      url: "https://talentconnect.herokuapp.com/",
      identifier: listing.module,
      title: "Discussion"
    }


  return listing !== undefined ? (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => {window.history.back()}}
        >
          Back    
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <Typography variant="h6" color="primary" >
                    {listing.module}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  {/* <IconButton variant="outlined" color="primary" onClick={handleSubChange}>
                    {sub ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton> */}
                  {sub ? Unsubscribe : Subscribe}
                </Grid>
              </Grid>

              <Typography variant="h6" component="h2">
                {listing.title}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                <br></br>
                AY {listing.acadYear}
                <br></br>
                {listing.semester}
                <br></br>
                <br></br>
              </Typography>
              <Divider variant="middle" />
              <Typography variant="body2" color="textPrimary" component="p">
                <br></br>
                Module Coordinator: <br></br>
                {listing.moduleCoordinator} <br></br> <br></br>
                Email: <br></br>
                {listing.email} <br></br> <br></br>
                Jobscope: <br></br>
                {listing.jobScope} <br></br><br></br>
                Number Of Openings: <br></br>
                {listing.numberOfOpenings} <br></br> <br></br>
                Deadline: <br></br>
                {listing.deadline} <br></br> <br></br>
                Requirements: <br></br>
                {listing.requirements} <br></br> <br></br>
                Application Process: <br></br>
                {listing.applicationProcess} <br></br> <br></br>
                Attachments: <br></br>
                link <br></br> <br></br>
                Other information: <br></br>
                {listing.otherInfo} <br></br><br></br>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          </CardActions>
        </Card>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Grid>
    </Grid>
  ) : null; // Or have some loading screen;
};

export default ViewListingStudent;