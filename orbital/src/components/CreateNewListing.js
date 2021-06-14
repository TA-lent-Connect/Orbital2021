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
import ModuleForm from './ModuleForm';
import ApplicationForm from './ApplicationForm';
import AttachmentForm from './AttachmentForm';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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
    marginLeft: theme.spacing(1),
  },
}));


export default function CreateNewListing({user, addListing}) {
  const classes = useStyles();

  const [module, setModule] = useState('')
  const [acadYear, setAcadYear] = useState('')
  const [semester, setSemester] = useState('')
  const [moduleCoordinator, setModuleCoordinator] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [jobScope, setJobScope] = useState('')
  const [numberOfOpenings, setNumberOfOpenings] = useState('')
  const [deadline, setDeadline] = useState('')
  const [requirements, setRequirements] = useState('')
  const [applicationProcess, setApplicationProcess] = useState('')
  const [otherInfo, setOtherInfo] = useState('')

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ['Module Information', 'Application Details', 'Attachments'];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ModuleForm user={user} module={module} setModule={setModule} acadYear={acadYear} setAcadYear={setAcadYear} semester={semester} setSemester={setSemester} moduleCoordinator={moduleCoordinator} setModuleCoordinator={setModuleCoordinator} email={email} setEmail={setEmail} jobScope={jobScope} setJobScope={setJobScope} />;
      case 1:
        return <ApplicationForm numberOfOpenings={numberOfOpenings} setNumberOfOpenings={setNumberOfOpenings} deadline={deadline} setDeadline={setDeadline} requirements={requirements} setRequirements={setRequirements} applicationProcess={applicationProcess} setApplicationProcess={setApplicationProcess} />;
      case 2:
        return <AttachmentForm otherInfo={otherInfo} setOtherInfo={setOtherInfo} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const createNewListing = (event) => {
    event.preventDefault()
    const newListing = {
      module: module,
      acadYear: acadYear,
      semester: semester,
      moduleCoordinator: moduleCoordinator,
      email: email,
      jobScope: jobScope,
      numberOfOpenings: numberOfOpenings,
      deadline: deadline,
      requirements: requirements,
      applicationProcess: applicationProcess,
      otherInfo: otherInfo
    }
    console.log(newListing)
    addListing(newListing)
    setActiveStep(activeStep + 1);

  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <IconButton 
            aria-label="delete"
            href="/mymodules">
            <CloseIcon />
          </IconButton>
          <Typography component="h1" variant="h5" align="center">
            New Listing
          </Typography>
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
                  Your Listing has been successfully created!
                </Typography>
                <Typography variant="subtitle1">
                  Hope you find good applicants :-)
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    href="/mymodules"
                  >
                    Back to MyModules
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
                    onClick={activeStep === steps.length - 1 ? createNewListing : handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Create Listing' : 'Next'}
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