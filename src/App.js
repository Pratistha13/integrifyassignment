import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import Users from './Components/Users/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= "/"   component={HomePage}/>
        <Route path = "/users/:id" component={Users}/>
      </Switch>
    </Router>
  );
}

export default App;