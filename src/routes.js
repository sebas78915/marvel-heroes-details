import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterDetailsContainer from './views/character-details/character-details-container';
import HomeContainer from './views/home/home-container';

class Routes extends Component {

  render() {
    return(
      <div>
        <Router >
        <div>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/character/:id' component={CharacterDetailsContainer} />
            {/* <Route path="/listitem/:id" component={RenderListItem} /> */}

          </Switch>
        </div>
        </Router>
      </div>
    )}
}

export default Routes;
