import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import HumFeed from '../HumFeed';
import UserDetail from '../UserDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hum-feed" component={HumFeed} />
        <Route exact path="/user" component={UserDetail} />
      </Switch>
    </Router>
  );
}

export default App;
