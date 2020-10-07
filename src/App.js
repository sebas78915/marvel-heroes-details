import React from 'react';
import Routes from './routes';
import './App.css'
import Header from './header';


function App() {

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
