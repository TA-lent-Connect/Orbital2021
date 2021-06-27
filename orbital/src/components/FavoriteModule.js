import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import users from '../services/users';
import Tooltip from '@material-ui/core/Tooltip';


export default function FavoriteModule({module, user}) {

  const handleClick = () => {
    //   if ({user.favorites}.includes({module.moduleCode})) {
    //     {user.favorites.filter(moduleCode => moduleCode !== {module}.moduleCode)}
    //       {user.favorites.remove(module.moduleCode)};
    //   } else {
    //       {user.favorites.push(module.moduleCode)};
    //   }
    if (
      isFavorite ===
      (
        <Tooltip title="Unsubscribe to Module">
          <IconButton variant="outlined" color="primary" onClick={handleClick}>
            <FavoriteIcon></FavoriteIcon>
          </IconButton>
        </Tooltip>
      )
    ) {
      isFavorite = (
        <Tooltip title="Subscribe to Module">
          <IconButton variant="outlined" color="primary" onClick={handleClick}>
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </IconButton>
        </Tooltip>
      );
    } else {
      isFavorite = (
        <Tooltip title="Unsubscribe to Module">
          <IconButton variant="outlined" color="primary" onClick={handleClick}>
            <FavoriteIcon></FavoriteIcon>
          </IconButton>
        </Tooltip>
      );
    }
    window.location.reload(false);
  };

//   const isFavorite = ({module.moduleCode} in {user.favorites});
      var isFavorite = (
        <Tooltip title="Subscribe to Module">
          <IconButton variant="outlined" color="primary" onClick={handleClick}>
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </IconButton>
        </Tooltip>
      );
  return (
    <div>
      {isFavorite}
    </div>
  );
}