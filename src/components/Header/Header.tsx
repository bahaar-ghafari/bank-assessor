import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import React, { ReactElement } from 'react';
import clsx from 'clsx';
// icons
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { logOutRequest } from '../../redux/Auth/action';
import { useDispatch } from 'react-redux';
interface Props {
  handleDrawerOpen: any;
  open: boolean;
  classes: any;
  currentUser: any;
  history: any;
}

export default function Header(props: Props): ReactElement {
  const { handleDrawerOpen, open, classes, currentUser, history } = props;
  const dispatch = useDispatch();
  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit" onClick={(e: any) => dispatch(logOutRequest(e, history))}>
          <AccountCircle />
          {currentUser?.username}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
