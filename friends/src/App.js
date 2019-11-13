import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Nav from './components/Nav';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import EditFriend from './components/EditFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/login" component={Login} /> */}
          <PrivateRoute path="/add-friend" component={AddFriend} />
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <PrivateRoute exact path="/edit-friend:friendId" component={EditFriend} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
