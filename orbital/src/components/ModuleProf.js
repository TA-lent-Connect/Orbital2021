import React, { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';

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


const ModuleProf = ({ module, listings, setListingToEdit}) => {
  const classes = useStyles();
  const history = useHistory();
  const linktoNUSMods = `https://www.nusmods.com/modules/${module.moduleCode}`;

  const viewModule = () => {
    window.open(linktoNUSMods);
  }

  const listingFound = listings.filter(listing => {
    return listing.module === module.moduleCode
  })

  const viewListing = () => {
    history.push(`/listings/${listingFound[0].module}`);
    setListingToEdit(listingFound[0])
  }

  const viewListings = () => {
    history.push("/listings");
    setListingToEdit(listingFound[0])
  }

  const createListing = () => {
    history.push("/mymodules/createnewlisting");
    setListingToEdit(module.moduleCode)
  }

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={10}>
                <Typography
                  className={classes.title}
                  color="primary"
                  onClick={viewModule}
                >
                  <br></br>
                  {module.moduleCode}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                {listingFound.length >= 1 ? (
                  listingFound.length === 1 ? (
                    <Tooltip title="View Listing">
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={viewListing}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip> ) : (
                      <Tooltip title="Multiple Listings">
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={viewListings}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    )                 
                ) : (
                  null
                )}
              </Grid>
            </Grid>
            <Typography variant="h6" component="h2" onClick={viewModule}>
              {module.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              onClick={viewModule}
            >
              <br></br>
              <br></br>
              {module.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            href={linktoNUSMods}
            target="_blank"
            color="primary"
          >
            Learn More
          </Button>
          {listingFound.length >= 1 ? (
            listingFound.length === 1 ? (
              <Button
                size="small"
                onClick={viewListing}
                target="_blank"
                color="primary"
              >
                View Listing
              </Button> ) : (
                <Button
                size="small"
                onClick={viewListings}
                target="_blank"
                color="primary"
              >
                View Listings
              </Button>
              )
          ) : (
            <Button
              size="small"
              onClick={createListing}
              target="_blank"
              color="primary"
            >
              Create Listing
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ModuleProf