import { useAuth0 } from '@auth0/auth0-react';
import { Button, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';
import { changePage } from '../../utils/change-page';
import Loader from '../../utils/loader';
import LoginButton from '../../utils/login-button';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    padding: theme.spacing(5),
    justifyContent:'center'
  },
  button: {
    margin: theme.spacing(6),
    height: '100px',
    width: '300px',
    fontSize: '25px',
    fontFamily: 'Luckiest Guy, cursive',
  }
}));

export default function LandingPage(props) {

  const classes = useStyles();
  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading) {
    return <Loader />
  }

  return (
    localStorage.getItem('isAuthenticated') ?
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <Button className={classes.button} variant="contained" color="primary" onClick={() => changePage('characters', props)}>Go to characters</Button >
        <Button className={classes.button} variant="contained" color="primary" onClick={() => changePage('comics', props)}>Go to comics</Button >
      </ThemeProvider>
    </div> :
    <LoginButton />
  )
}