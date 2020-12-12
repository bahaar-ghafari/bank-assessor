import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core';
import React, { ReactElement } from 'react';
import clsx from 'clsx';
// icons
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { logOutRequest } from '../../redux/Auth/action';
import { useDispatch } from 'react-redux';

import tarbiatModarresLogo from '../../assets/img/modarres.jpg';
import vezarat_eghtesadLogo from '../../assets/img/vEghtesad.jpeg';

import BANK_MASKAN from '../../assets/img/bank_maskan.png';
import BANK_MELLAT from '../../assets/img/bank_mellat.png';
import BANK_MELLI from '../../assets/img/bank_melli.png';
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
      <Toolbar
        className={classes.toolbar}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
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
        <Box height="64px">
          <img
            style={{ padding: '4px' }}
            height="100%"
            src={tarbiatModarresLogo}
            alt="tarbiat_modarres_uni_logo"
          />
          <img
            style={{ padding: '4px' }}
            height="100%"
            src={vezarat_eghtesadLogo}
            alt="vezarat_eghtesad_logo"
          />
          {currentUser.role === 'BANK_MELLAT' && (
            <img
              style={{ padding: '4px' }}
              height="100%"
              src={BANK_MELLAT}
              alt="vezarat_eghtesad_logo"
            />
          )}
          {currentUser.role === 'BANK_MELLI' && (
            <img
              style={{ padding: '4px' }}
              height="100%"
              src={BANK_MELLI}
              alt="vezarat_eghtesad_logo"
            />
          )}
          {currentUser.role === 'BANK_MASKAN' && (
            <img
              style={{ padding: '4px' }}
              height="100%"
              src={BANK_MASKAN}
              alt="vezarat_eghtesad_logo"
            />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
