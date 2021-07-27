import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AppsIcon from '@material-ui/icons/Apps';
import DashboardIcon from '@material-ui/icons/Dashboard';

const pageSelected = window.history.state;

export const mainListItems = (
  <div>
    <ListItem 
    // selected={window.history.state === "ApplyLandingPage"}
    button onClick= {() => {
      window.history.pushState("ApplyLandingPage","ApplyLandingPage", "/apply");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <PeopleIcon style={pageSelected === 'ApplyLandingPage' ? {fill: "#ff5722"} : {fill: "#000000"}} />
      </ListItemIcon>
      <ListItemText primary="Apply" style={pageSelected === 'ApplyLandingPage' ? {color: "#ff5722"} : {color: "#000000"}}/>
    </ListItem>
    <ListItem 
    // selected={window.history.state === "MyModulesLandingPage"}
    button onClick= {() => {
      window.history.pushState("MyModulesLandingPage","MyModulesLandingPage", "/mymodules");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <DashboardIcon style={pageSelected === 'MyModulesLandingPage' ? {fill: "#ff5722"} : {fill: "#000000"}} />
      </ListItemIcon>
      <ListItemText primary="MyModules" style={pageSelected === 'MyModulesLandingPage' ? {color: "#ff5722"} : {color: "#000000"}}/>
    </ListItem>
    <ListItem 
    // selected={window.history.state === "ListingsLandingPage" || window.history.state === "StudentLandingPage"}
    button onClick= {() => {
      window.history.pushState("ListingsLandingPage","ListingsLandingPage", "/listings");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <FormatListBulletedIcon style={(pageSelected === 'ListingsLandingPage' || pageSelected === "StudentLandingPage") ? {fill: "#ff5722"} : {fill: "#000000"}} />
      </ListItemIcon>
      <ListItemText primary="Listings" style={(pageSelected === 'ListingsLandingPage' || pageSelected === "StudentLandingPage") ? {color: "#ff5722"} : {color: "#000000"}}/>
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
      <ListItemText primary="Modules" style={pageSelected === 'ModulesLandingPage' ? {color: "#ff5722"} : {color: "#000000"}}/>
    </ListItem>
    <ListItem 
    // selected={window.history.state === "SettingsLandingPage"}
    button onClick= {() => {
      window.history.pushState("SettingsLandingPage","SettingsLandingPage", "/settings");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <SettingsIcon style={pageSelected === 'SettingsLandingPage' ? {fill: "#ff5722"} : {fill: "#000000"}}  />
      </ListItemIcon>
      <ListItemText primary="Settings" style={pageSelected === 'SettingsLandingPage' ? {color: "#ff5722"} : {color: "#000000"}} />
    </ListItem>
  </div>
);
