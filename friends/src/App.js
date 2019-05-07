import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsListView from './Views/FriendsListView';
import FriendForm from './components/FriendForm';
import NavBar from './components/NavBar';
import UpdateFriendForm from './components/UpdateFriendForm';

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <Route path="/" component={NavBar} />
        <ProtectedRoute path="/protected" component={FriendsListView} />
        <PrivateRoute exact path="/friendForm" component={FriendForm} />
       
      </div>
    </Router>
  );
}

export default App;
