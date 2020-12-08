import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Pages from './components/Tables/Pages';
import { IApplicationState } from './store/state';

function App() {
  const currentUser = useSelector((state: IApplicationState) => state.auth);
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={currentUser?.authorized ? Pages : Login} />
      </Switch>
    </Router>
  );
}

export default App;
