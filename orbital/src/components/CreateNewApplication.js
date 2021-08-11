import React, {useState} from 'react' 
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ApplicationDetailsForm from './ApplicationDetailsForm';
import ApplicationAttachmentForm from './ApplicationAttachmentForm';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://talentconnect.herokuapp.com/">
        TA-Lent Connect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0),

  },
}));


export default function CreateNewApplication({user, addApplication, modules, listings, initialModule}) {
  const classes = useStyles();

  const [module, setModule] = useState((initialModule !== undefined) ? initialModule.module : '')
  const [title, setTitle] = useState('')
  const [acadYear, setAcadYear] = useState((initialModule !== undefined) ? initialModule.acadYear : '')
  const [semester, setSemester] = useState((initialModule !== undefined) ? initialModule.semester : '')
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [otherInfo, setOtherInfo] = useState('')
  const [major, setMajor] = useState('')
  const [studyYear, setStudyYear] = useState('')
  const [fileName, setFileName] = useState('')

  const [moduleError, setModuleError] = useState(null);
  const [acadYearError, setAcadYearError] = useState(null);
  const [semesterError, setSemesterError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [majorError, setMajorError] = useState(null);
  const [studyYearError, setStudyYearError] = useState(null);



  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === 0){
      const moduleFound = listings.filter(module1 => {
        return module1.module === module.trim()
      })
      console.log(moduleFound)
      if (moduleFound.length === 0) {
        setModuleError("Listing for this module code not found")
      }
      else {
        setTitle(moduleFound[0].title)
        setModuleError("")
      }
      if (acadYear === "") {
        setAcadYearError("Please choose an academic year")
      }
       else {
        setAcadYearError("")
      }
      if (studyYear === "") {
        setStudyYearError("Please select your year of study")
      }
      else {
        setStudyYearError("")
      }
      if (major === "") {
        setMajorError("Please choose your major")
      }
      else {
        setMajorError("")
      }
      if (semester === "") {
        setSemesterError("Please choose a semester")
      }
      else {
        setSemesterError("")
      }
      if (name.trim() === "") {
        setNameError("Please enter your name")
      }
      else {
        setNameError("")
      }
      if (email.trim() === "") {
        setEmailError("Please enter your email")
      }
      else {
        setEmailError("")
      }
      if (moduleFound.length !== 0 && acadYear !== "" && semester !== "" && name.trim() !== "" && email.trim() !== "" && major.trim() !== "" && studyYear.trim() !== "" && moduleError === "") {
        setActiveStep(activeStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ['Application Details', 'Attachments'];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ApplicationDetailsForm user={user} module={module} setModule={setModule} moduleError={moduleError} acadYear={acadYear} setAcadYear={setAcadYear} acadYearError={acadYearError} semester={semester} setSemester={setSemester} semesterError={semesterError} name={name} setName={setName} nameError={nameError} email={email} setEmail={setEmail} emailError={emailError} major={major} setMajor={setMajor} majorError={majorError} studyYear={studyYear} setStudyYear={setStudyYear} studyYearError={studyYearError}/>;
      case 1:
        return <ApplicationAttachmentForm otherInfo={otherInfo} setOtherInfo={setOtherInfo} fileName={fileName} setFileName={setFileName}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const createNewApplication = (event) => {
    event.preventDefault()
    const newApplication = {
      module: module,
      title: title,
      acadYear: acadYear,
      semester: semester,
      name: name,
      email: email,
      major: major,
      studyYear: studyYear,
      otherInfo: otherInfo,
      fileName: fileName,
    }
    console.log(newApplication)
    addApplication(newApplication)
    setActiveStep(activeStep + 1);

  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
              <Typography component="h2" variant="h6" align="center" color="primary">
                New Application
              </Typography> 	
            </Grid>
            <Grid item xs={2}>
              <IconButton 
                aria-label="delete"
                onClick={() => {window.history.back()}}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Your Application has been successfully created!
                </Typography>
                <Typography variant="subtitle1">
                  <br></br>
                  Hope you are sucessful in your application :-)
                  <br></br>
                  <br></br>
                  <br></br>
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    href="/apply"
                  >
                    Back to Apply
                  </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? createNewApplication : handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Create Application' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}