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


export default function FavoriteModule({module, user}) {

  const handleClick = () => {
    //   if ({user.favorites}.includes({module.moduleCode})) {
    //     {user.favorites.filter(moduleCode => moduleCode !== {module}.moduleCode)}
    //       {user.favorites.remove(module.moduleCode)};
    //   } else {
    //       {user.favorites.push(module.moduleCode)};
    //   }
      if (isFavorite === <FavoriteIcon></FavoriteIcon>) {
          isFavorite = <FavoriteBorderIcon></FavoriteBorderIcon>;
      } else {
          isFavorite = <FavoriteIcon></FavoriteIcon>;
      }
      window.location.reload(false);
      };

//   const isFavorite = ({module.moduleCode} in {user.favorites});
      var isFavorite = <FavoriteBorderIcon></FavoriteBorderIcon>;
  return (
    <div>
      <IconButton variant="outlined" color="primary" 
      onClick={handleClick}
      >
      {isFavorite}
      </IconButton>
    </div>
  );
}