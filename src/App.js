import React from 'react';
import Routes from './routes';
import './App.css'

import { makeStyles } from '@material-ui/core/styles';
import Background from './img/background-comics.jpg'
import Header from './header';


function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    background: {
      backgroundImage: Background
    }
  }));
  
  const classes = useStyles();

  return (
    <div className="App"> 
      {/* <header className="banner-marvel"></header> */}
      <Header />
      <div className="background-comics">
        <Routes />
      </div>
    </div>
  );

}

export default App;
