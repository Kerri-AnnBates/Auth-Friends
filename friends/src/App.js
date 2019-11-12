import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Nav from './components/Nav';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route component={Login} /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute path="/add-friend" component={AddFriend} />
          <PrivateRoute exact path="/friends" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
