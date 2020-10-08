import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterDetailsContainer from './views/character-details/character-details-container';
import HomeContainer from './views/home/home-container';
import LandingPage from './views/home/landing-page';

class Routes extends Component {

  render() {
    return(
      <>
        <Router >
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path={`/characters`} component={HomeContainer} />
            <Route path={`/comics`} component={HomeContainer} />
            <Route path='/character/:id' component={CharacterDetailsContainer} />
            <Route path='/comic/:id' component={CharacterDetailsContainer} />
            {/* <Route path="/listitem/:id" component={RenderListItem} /> */}

          </Switch>
        </Router>
      </>
    )}
}

export default Routes;
