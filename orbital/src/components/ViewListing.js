import React from "react";
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

const ViewListing = ({ listing }) => {
  const classes = useStyles();
  const history = useHistory();

  return listing !== undefined ? (
    <Grid item xs={12}>
    <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<KeyboardBackspaceIcon />}
          >
            Back    
          </Button>
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
            </Grid>
            <Typography variant="h6" component="h2">
              {listing.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <br></br>
              AY {listing.acadYear} {listing.semester} <br></br>
              {listing.moduleCoordinator} <br></br>
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p">
                  <br></br>
                  Requirements: <br></br>{listing.requirements} <br></br> <br></br>
              Jobscope: <br></br>{listing.jobScope} <br></br><br></br>
              Other information: <br></br>{listing.otherInfo} <br></br><br></br>
              </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    </Grid>
  ) : null; // Or have some loading screen;
};

export default ViewListing;