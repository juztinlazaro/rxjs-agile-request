import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../components/App';
import Test from '../components/Test/Test';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/test" component={Test} exact />
      </Switch>
    );
  }
}

export default Routes;
