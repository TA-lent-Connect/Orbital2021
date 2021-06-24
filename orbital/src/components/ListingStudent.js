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
import { useHistory } from 'react-router-dom'
import ConfirmDeleteProf from '../components/ConfirmDeleteProf'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "75%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

const ListingStudent = ({ user, listing ,  setListingToEdit, listings, setListings}) => {
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

  return listing !== undefined ? (
    <Grid item xs={12} sm={6}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={10}>
                <Typography className={classes.title} color="textSecondary" >
                  <br></br>
                  {listing.module}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton variant="outlined" color="primary" onClick={handleSubChange}>
                  {sub ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Grid>
            </Grid>
            <Typography variant="h6" component="h2">
              {listing.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <br></br>
              <br></br>
              AY {listing.acadYear} {listing.semester} <br></br>
              {listing.moduleCoordinator}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" button onClick= {() => {
            history.push(`/listings/${listing.module}`);
            setListingToEdit(listing)
          }}>
            View Listing
          </Button>
          <Button size="small" color="primary" onClick= {() => {
            history.push(`/apply/${listing.module}`);
            setListingToEdit(listing)
          }}>
            Apply
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ) : null; // Or have some loading screen;
};

export default ListingStudent;