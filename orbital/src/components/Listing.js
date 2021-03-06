import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

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

const Listing = ({ listing, setListingToEdit, user}) => {
  const classes = useStyles();
  const history = useHistory();

  const viewListing = () => {
    history.push(`/listings/${listing.module}`);
    setListingToEdit(listing)
  }

  const handleEdit = () => {
    history.push("/mymodules/editlisting");
    setListingToEdit(listing)
  }

  return listing !== undefined ? (
    <Grid item xs={12} sm={6}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={10} onClick={viewListing}>
                <Typography className={classes.title} color="textSecondary">
                  <br></br>
                  {listing.module}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                {user !== undefined &&
                listing.user.username === user.username ? (
                  <Tooltip title="Edit Listing">
                    <IconButton
                      variant="outlined"
                      color="primary"
                      onClick={handleEdit}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                ) : null}
              </Grid>
            </Grid>
            <Typography variant="h6" component="h2" onClick={viewListing}>
              {listing.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              onClick={viewListing}
            >
              <br></br>
              <br></br>
              AY {listing.acadYear} {listing.semester} <br></br>
              {listing.moduleCoordinator}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            button
            onClick={() => {
              history.push(`/listings/${listing.module}`);
              setListingToEdit(listing);
            }}
          >
            View Listing
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ) : null; // Or have some loading screen;
};

export default Listing;