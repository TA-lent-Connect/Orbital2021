import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function NewApplicationButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        id="newListingButton"
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddIcon />}
        href = "/apply/createnewapplication"
      >
        New Application
      </Button>
    </div>
  );
}