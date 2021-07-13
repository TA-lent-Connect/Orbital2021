import React, { useState } from 'react'
import userService from '../services/users'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import ErrorAlert from '../components/ErrorAlert'
import SuccessAlert from '../components/SuccessAlert'
import Logo from '../components/logo.png';

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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('') 
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('') 
  const [accountType, setAccountType] = useState('')

  const [error, setError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [accountTypeError, setAccountTypeError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value)
  }

  const handleSignUp = async (event) => {
    event.preventDefault()

    console.log(success)

    if (firstName.trim() === "") {
      setFirstNameError("Invalid First Name")
      setAlert(true)
    } else {
      setFirstNameError("")
    }
    
    if (lastName.trim() === "") {
      setLastNameError("Invalid Last Name")
      setAlert(true)
    } else {
      setLastNameError("")
    }
    
    if (username.trim() === "") {
      setUsernameError("Invalid Username")
      setAlert(true)
    } else {
      setUsernameError("")
    }
    
    if (password.trim() === "") {
      setPasswordError("Invalid Password")
      setAlert(true)
    } else {
      setPasswordError("")
    }
    
    if (email.trim() === "") {
      setEmailError("Invalid Email")
      setAlert(true)
    } else {
      setEmailError("")
    }
    
    if (accountType === "") {
      setAccountTypeError("Invalid Account Type")
      setAlert(true)
    } else {
      setAccountTypeError("")
    }
    
    if (firstName.trim() !== "" && lastName.trim() !== "" && username.trim() !== "" && password.trim() !== "" && email.trim() !== "" && accountType !== "") {
      try {
        const newUser = {
          name: firstName + " " + lastName,
          username: username,
          password: password,
          email: email,
          accountType: accountType
        }
        const user = await userService.create(newUser)
        setSuccess(true)
        setSuccessAlert(true)
      } catch (exception) {
        setError("Username already taken")
        setAlert(true)
      }
    }


  }

  return (
    <Container component="main" maxWidth="xs">
      <ErrorAlert alert={alert} setAlert={setAlert} errorMessage={error ? error : "Invalid Field(s)"} />
      <SuccessAlert alert={successAlert} setAlert={setSuccessAlert} successMessage={"User Successfully Created"} />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={Logo} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={ handleSignUp }>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={firstNameError === "Invalid First Name"}
                helperText={firstNameError}
                value={firstName}
                onChange={handleFirstNameChange}
                disabled={success}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                error={lastNameError === "Invalid Last Name"}
                helperText={lastNameError}
                value={lastName}
                onChange={handleLastNameChange}
                disabled={success}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                error={usernameError === "Invalid Username"}
                helperText={usernameError}
                value={username}
                onChange={handleUsernameChange}
                disabled={success}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError === "Invalid Password"}
                helperText={passwordError}
                value={password}
                onChange={handlePasswordChange}
                disabled={success}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                label="Email"
                id="email"
                autoComplete="email"
                error={emailError === "Invalid Email"}
                helperText={emailError}
                value={email}
                onChange={handleEmailChange}
                disabled={success}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="accountType"
                label="Account Type"
                select
                value={accountType}
                id="accountType"
                error={accountTypeError === "Invalid Account Type"}
                helperText={accountTypeError}
                onChange={handleAccountTypeChange}
                disabled={success}
              >
                <MenuItem value={"Student"}>Student</MenuItem>
                <MenuItem value={"Module Coordinator"}>Module Coordinator</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            href= {success ? "/" : ""}
          >
            {success ? "Account created | Back to Sign In" : "Sign up"}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUp