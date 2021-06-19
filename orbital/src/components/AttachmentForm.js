import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AttachmentIcon from '@material-ui/icons/Attachment';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function AttachmentForm({otherInfo, setOtherInfo}) {
  const classes = useStyles();

  const handleOtherInfoChange = (event) => {
    setOtherInfo(event.target.value)
  }

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<AttachmentIcon />}
          >
            Upload File
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="otherInfo"
            name="otherInfo"
            label="Other Information"
            multiline
            rows={8}
            fullWidth
            value={otherInfo}
            onChange={handleOtherInfoChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}