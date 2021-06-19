import React, { useState, useEffect} from 'react'
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import listingService from '../services/listings'

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
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Module = ({ module }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
//   const [listings, setListings] = useState([])

// useEffect(() => {
//   listingService
//     .getAll()
//     .then(initialListings => {
//     setListings(initialListings)
//   })
// }, [])

// var listingExists = false;
// for (listing in listings) {
//   if ({module.moduleCode} === {listing.module}) {
//     listingExists = true;
//   }
// }

  return (
    <>
  <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {module.moduleCode}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {module.title}
          </Typography>
          <Typography variant="body2" component="p">
        {module.description}
      </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" button onClick= {() => {
      window.history.pushState("ListingModuleCodeLandingPage","ListingModuleCodeLandingPage", `/listings/${module.moduleCode}`);
      window.location.reload(false);
    }}>
          View Listing
        </Button>
        <Button size="small" color="primary" button onClick= {() => {
      window.history.pushState("ModuleCodeLandingPage","ModuleCodeLandingPage", `/modules/${module.moduleCode}`);
      window.location.reload(false);
    }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  </>
);
}

export default Module