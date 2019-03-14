import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import HumFeed from '../hums/HumFeed';
import UserDetail from '../user/UserDetail';
import Callback from '../../containers/auth/Callback';
import { withSession } from '../../containers/auth/withSession';
import Loading from './Loading';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withSession(Home)} />
        <Route exact path="/hum-feed" component={withSession(HumFeed)} />
        <Route exact path="/user" component={withSession(UserDetail)} />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/callback" component={Callback} />
      </Switch>
    </Router>
  );
}

export default App;
