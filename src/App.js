import React from 'react';
import Routes from './routes';
import './App.css'
import Header from './header';


function App(props) {

  return (
    <div className="App"> 
      {/* <header className="banner-marvel"></header> */}
      <Header {...props} />
      <div className="background-comics">
        <Routes />
      </div>
    </div>
  );

}

export default App;
