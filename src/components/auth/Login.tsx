import React, { useState } from 'react';
import { Avatar, Grid, CssBaseline, Paper, Box } from '@material-ui/core';
//icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//styles
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CustomTextField from '../../utils/inputs/TextField';
import CustomButton from '../../utils/buttons/Button';
// import CustomCheckBox from "../../utils/checkBox/CheckBox";
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../redux/Auth/action';
import { theme } from '../../Constants/Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <CustomTypoGraphy component="h1" variant="h5" label="ورود" />
          <Box width="100%">
            <ThemeProvider theme={theme}>
              <div dir="rtl">
                <form className={classes.form} noValidate>
                  <CustomTextField
                    width="20%"
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth={true}
                    id="username"
                    label="نام کاربری"
                    name="username"
                    autoComplete="username"
                    autoFocus={true}
                    value={userName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUserName(e?.target?.value)
                    }
                  />
                  <CustomTextField
                    width="20%"
                    variant="outlined"
                    margin="normal"
                    required={true}
                    fullWidth={true}
                    name="password"
                    label="گذرواژه"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={passWord}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassWord(e?.target?.value)
                    }
                  />
                  {/* <CustomCheckBox
              value="remember"
              color="primary"
              label="Remember me"
            /> */}
                  {/* <Link to={"/"}> */}
                  <CustomButton
                    type="submit"
                    fullWidth={true}
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    label="ورود"
                    onClickFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
                      dispatch(
                        loginRequest(
                          e,
                          {
                            username: userName,
                            password: passWord,
                          },
                          history,
                        ),
                      )
                    }
                  />
                  {/* </Link> */}

                  {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
                </form>
              </div>
            </ThemeProvider>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}