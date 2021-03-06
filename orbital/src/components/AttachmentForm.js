import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AttachmentIcon from '@material-ui/icons/Attachment';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ReactFileReader from "react-file-reader";
import FormData from 'form-data';

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

export default function AttachmentForm({otherInfo, setOtherInfo, uploads, setUploads, addUpload, fileName, setFileName}) {
  const classes = useStyles();

  const handleOtherInfoChange = (event) => {
    setOtherInfo(event.target.value)
  }

  const handleCapture = ({target}) => {

    var formData = new FormData();
    formData.set('name', target.files[0].name)
    formData.append('file', target.files[0])
    console.log(formData.get('name'))
    console.log(formData.get('file'))
    setFileName(target.files[0].name)
    setFileUploaded(true);
    // var reader = new FileReader();
    // reader.onload = function(e) {
    //   console.log(e.target.result)
    //   var arrayBuffer = reader.result
    //   console.log(target.files[0])
    //   const newUpload = {
    //       name: target.files[0].name,
    //       file: arrayBuffer,
    //     }
    //   console.log(newUpload.file)
    //   addUpload(arrayBuffer)
    // };
    addUpload(formData)
    // reader.readAsArrayBuffer(target.files[0]);
  }

  const handleDelete = () => {
    setFileUploaded(false);
    setFileName('')
  }

  const [fileUploaded, setFileUploaded] = useState('');

  const showFile = (
    <Grid>
  <Typography variant="body2" color="textPrimary" align="center">
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
            Upload File
            <input 
              type="file"
              hidden
              onChange={handleCapture}
              />
          </Button>
        </Grid>
        {fileUploaded ? showFile : null}
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