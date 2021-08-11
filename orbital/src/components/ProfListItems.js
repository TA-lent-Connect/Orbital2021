import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AppsIcon from '@material-ui/icons/Apps';



  const pageSelected = window.history.state;
  console.log(pageSelected)


export const mainListItems = (
  <div>
    <ListItem 
    // selected={window.history.state === "ApplicationsLandingPage"}
    button onClick= {() => {
      window.history.pushState("ApplicationsLandingPage","ApplicationsLandingPage", "/applications");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <PeopleIcon style={pageSelected === 'ApplicationsLandingPage' ? {fill: "#ff5722"} : {fill: "#000000"}} />
      </ListItemIcon>
      <ListItemText primary="Applications" style={pageSelected === 'ApplicationsLandingPage' ? {color: "#ff5722"} : {color: "#000000"}} />
    </ListItem>
    <ListItem 
    // selected={window.history.state === "MyModulesLandingPage"}
    button onClick= {() => {
      window.history.pushState("MyModulesLandingPage","MyModulesLandingPage", "/mymodules");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <DashboardIcon style={(pageSelected === 'MyModulesLandingPage' || pageSelected === "ModuleCoordinatorLandingPage") ? {fill: "#ff5722"} : {fill: "#000000"}} />
      </ListItemIcon>
      <ListItemText primary="MyModules" style={(pageSelected === 'MyModulesLandingPage' || pageSelected === "ModuleCoordinatorLandingPage") ? {color: "#ff5722"} : {color: "#000000"}}/>
    </ListItem>
    <ListItem 
    // selected={window.history.state === "ListingsLandingPage" || window.history.state === "ModuleCoordinatorLandingPage"}
    button onClick= {() => {
      window.history.pushState("ListingsLandingPage","ListingsLandingPage", "/listings");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <FormatListBulletedIcon style={pageSelected === 'ListingsLandingPage' ? {fill: "#ff5722"} : {fill: "#000000"}} />
      </ListItemIcon>
      <ListItemText primary="Listings" style={pageSelected === 'ListingsLandingPage' ? {color: "#ff5722"} : {color: "#000000"}}/>
    </ListItem>
    <ListItem 
    // selected={window.history.state === "ModulesLandingPage"}
    button onClick= {() => {
      window.history.pushState("ModulesLandingPage","ModulesLandingPage", "/modules");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <AppsIcon style={pageSelected === 'ModulesLandingPage' ? {fill: "#ff5722"} : {fill: "#000000"}} />
      </ListItemIcon>
      <ListItemText primary="Modules" style={pageSelected === 'ModulesLandingPage' ? {color: "#ff5722"} : {color: "#000000"}} />
    </ListItem>
  </div>
);
