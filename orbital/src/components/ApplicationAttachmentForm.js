import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';



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

export default function ApplicaitonAttachmentForm({otherInfo, setOtherInfo, fileName, setFileName}) {
  const classes = useStyles();

  const handleOtherInfoChange = (event) => {
    setOtherInfo(event.target.value)
  }

  const handleCapture = ({target}) => {
    console.log(target.files[0])
    setFileName(target.files[0].name)
    setFileUploaded(true);
  }

  const handleDelete = () => {
    setFileUploaded(false);
    setFileName('')
  }

  const [fileUploaded, setFileUploaded] = useState('');

  const showFile = (
    <Grid>
  <Typography variant="body2" color="textPrimary" align="left">
  <br></br>
  {fileName}
  <IconButton onClick={handleDelete} align="center"> 
<CloseIcon />
</IconButton>
</Typography>
</Grid>
  );

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
            // ng-click="submit()"
            component="label"
          >
            Upload Resume / Supporting Document
            <input 
              type="file"
              hidden
              onChange={handleCapture}
              />
          </Button>
          {fileUploaded ? showFile : null}
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