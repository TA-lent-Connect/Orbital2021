import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AppsIcon from '@material-ui/icons/Apps';
import DashboardIcon from '@material-ui/icons/Dashboard';

export const mainListItems = (
  <div>
    <ListItem button onClick= {() => {
      window.history.pushState("ApplyLandingPage","ApplyLandingPage", "/apply");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Apply" />
    </ListItem>
    <ListItem button onClick= {() => {
      window.history.pushState("MyModulesLandingPage","MyModulesLandingPage", "/mymodules");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="MyModules" />
    </ListItem>
    <ListItem button onClick= {() => {
      window.history.pushState("ListingsLandingPage","ListingsLandingPage", "/listings");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="Listings" />
    </ListItem>
    <ListItem button onClick= {() => {
      window.history.pushState("ModulesLandingPage","ModulesLandingPage", "/modules");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText primary="Modules" />
    </ListItem>
    <ListItem button onClick= {() => {
      window.history.pushState("SettingsLandingPage","SettingsLandingPage", "/settings");
      window.location.reload(false);
    }}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);
