/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  Container,
} from '@material-ui/core';
// icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircle from '@material-ui/icons/AccountCircle';
// style
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
//actions
import { RiskAssessment } from '../../redux/RiskAssessment/action';
import { MainListItems } from '../SideBar/SideBar';
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';
import { IApplicationState } from '../../store/state';
import { useSelector } from 'react-redux';
import {
  sideBarList,
  bank_sideBarItems,
  committee_sideBarItems,
  general_assessor_sideBarItems,
  risk_management_assessor_sideBarItems,
} from '../../Constants/sideBarList';
import { logOutRequest } from '../../redux/Auth/action';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SIDE_BAR_WIDTH, DASHBOARD_NAME } from '../../Constants/General';
import PrivateRout from '../../View/Route';
import { theme } from '../../Constants/Theme';

const drawerWidth = SIDE_BAR_WIDTH;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 340,
  },
}));

export default function Pages(props: any) {
  const classes = useStyles();
  const currentUser: {
    username: string;
    role: string | null;
    authorized: boolean;
  } = useSelector((state: IApplicationState) => state.auth);
  //user
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    // effect
    dispatch(RiskAssessment());
  }, []);

  const [open, setOpen] = React.useState(true);
  //methods
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const setPanelType = () => {
    switch (currentUser?.role) {
      case 'RISK_MANAGEMENT_ASSESSOR':
        return risk_management_assessor_sideBarItems;
        // eslint-disable-next-line no-unreachable
        break;
      case 'COMMITTEE':
        return committee_sideBarItems;
        // eslint-disable-next-line no-unreachable
        break;
      case 'GENERAL_ASSESSOR':
        return general_assessor_sideBarItems;
        // eslint-disable-next-line no-unreachable
        break;
      case 'BANK_MELLI':
        return bank_sideBarItems;
        // eslint-disable-next-line no-unreachable
        break;

      default:
        return sideBarList;
        // eslint-disable-next-line no-unreachable
        break;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <div className={classes.root}>
          <CssBaseline />
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
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <CustomTypoGraphy
                component="h1"
                variant="h6"
                color="inherit"
                noWrap={true}
                className={classes.title}
                label={DASHBOARD_NAME}
              />
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <MainListItems list={setPanelType()} />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <PrivateRout />
              {/* <Box pt={4}>
            <Copyright />
          </Box> */}
            </Container>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
