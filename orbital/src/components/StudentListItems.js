import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AppsIcon from '@material-ui/icons/Apps';

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
