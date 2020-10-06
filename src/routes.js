import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterDetailsContainer from './views/character-details/character-details-container';
import CharactersList from './views/home/characters-list';
import HomeContainer from './views/home/home-container';

class Routes extends Component {

  render() {
    return(
      <>
        <Router >
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/pages' component={CharactersList} />
            <Route path='/character/:id' component={CharacterDetailsContainer} />
            {/* <Route path="/listitem/:id" component={RenderListItem} /> */}

          </Switch>
        </Router>
      </>
    )}
}

export default Routes;
