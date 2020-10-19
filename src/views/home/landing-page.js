import { Button, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';
import { changePage } from '../../utils/change-page';

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
  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <Button className={classes.button} variant="contained" color="primary" onClick={() => changePage('characters', props)}>Go to characters</Button >
        <Button className={classes.button} variant="contained" color="primary" onClick={() => changePage('comics', props)}>Go to comics</Button >
      </ThemeProvider>
    </div>
  )
}