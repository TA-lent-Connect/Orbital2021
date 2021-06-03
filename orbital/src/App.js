// import React from 'react'
// import PageLogin from "./pages/PageLogin"
// import {isAdmin} from "./pages/PageLogin"
// import PageHome from "./pages/PageHome"

// const App = () => (
//   <div> 
//    {isAdmin ? <PageHome /> : <PageLogin />}
//   </div>
// )

// export default App


import React from 'react'
import PageLogin from "./pages/PageLogin"
import PageHome from "./pages/PageHome"
import {isAdmin} from "./pages/PageLogin"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      admin : false
    };
  }

  handleClick = () => {
    this.setState({ admin : true });
    console.log(this.state.admin);
  };
  

  render() {
    console.log(this.state.admin);
    return (
      <>
      <div>
      {this.state.admin ? <PageHome /> : <PageLogin /> }
      </div>
      <div>
        {this.state.admin ? <h5></h5> 
        :  
        <Box 
        display="flex" 
        width={1225} height={80} 
        alignItems="center"
        justifyContent="center"
      >
            <Button onClick={this.handleClick}
            type="submit"
            displayFlex="justify"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
      </Box>
}
      </div>
      </>
    );
  }
}

export default App
