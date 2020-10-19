import React from 'react';
import Routes from './routes';
import './App.css'
import Header from './header';
import Theme from './utils/theme';


function App(props) {

  return (
    <div className="App"> 
      {/* <header className="banner-marvel"></header> */}
      <Theme>
        <Header {...props} />
      </Theme>
      <div className="background-comics">
        <Routes />
      </div>
    </div>
  );

}

export default App;
