import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ConfirmDeleteStudent from '../components/ConfirmDeleteStudent'

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

const ApplicationListingStudent = ({ application, deleteApplication}) => {
  const classes = useStyles();

  return application !== undefined ? (
    <Grid item xs={12} sm={6}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={10}>
                <Typography className={classes.title} color="textSecondary" >
                  <br></br>
                  {application.module}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <ConfirmDeleteStudent application={application} deleteApplication={deleteApplication}/>
              </Grid>
            </Grid>
            <Typography variant="h6" component="h2">
              {application.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <br></br>
              AY {application.acadYear} {application.semester} <br></br>
            </Typography>
            <Typography variant="body2" component="p">
              <br></br>
              {application.user.name} <br></br>
              {application.email} <br></br>
              Major: {application.major} <br></br>
              Year of Study: {application.studyYear} <br></br> 
              File Uploaded: <a href="https://www.google.com" target="_blank"> {application.fileName === '' ? null : application.fileName}</a> <br></br> <br></br> <br></br> <br></br>
              Other Info: <br></br>
              {application.otherInfo}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    </Grid>
  ) : null; // Or have some loading screen;
};

export default ApplicationListingStudent;