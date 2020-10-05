import React from 'react';
import Routes from './routes';
import './App.css'
import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.root} variant="h2" gutterBottom>Marvel Universe</Typography>
      <Routes />
    </div>
  );

}

export default App;
