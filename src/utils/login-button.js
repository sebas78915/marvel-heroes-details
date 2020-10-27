import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Card, CardMedia, createMuiTheme, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MarvelImg from '../img/marvel-banner.jpg'

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent:'center'
  },
  button: {
    margin: theme.spacing(4),
    height: '100px',
    width: '300px',
    fontSize: '40px',
    fontFamily: 'Luckiest Guy, cursive',
  },
  label: {
    margin: theme.spacing(5),
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
}));

const LoginButton = () => {

  const classes = useStyles();
  const { loginWithRedirect } = useAuth0()

  const handleLogin = () => {
    loginWithRedirect();
    localStorage.setItem('isAuthenticated', 'true')
  }

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="270"
          image={MarvelImg}
        />
      </Card>
      <Typography align="center" variant="h3" className={classes.label}>
        Welcome to Marvel Universe Searcher. Let's get started!
      </Typography>
      <div className={classes.container}>
        <ThemeProvider theme={theme}>
          <Button className={classes.button} variant="contained" color="primary" onClick={() => handleLogin()}>Login</Button >
        </ThemeProvider>
      </div>
    </>
  )
}

export default LoginButton;