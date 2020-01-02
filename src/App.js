import React from 'react';
import logo from './logo.svg';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
  Table, Button, Container
} from 'reactstrap';
 
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/menu1"> MENU 1 </Route>
        <Route path="/menu2"> <Home></Home> </Route>
        <Route path="/menu3"> MENU 3 </Route>
      </Switch>
    </Router>
  );
}

export default App;
