import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from '../routes/routes';

import Test from './Test/Test';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Test} exact />
      </Switch>
    );
  }
}

export default App;
