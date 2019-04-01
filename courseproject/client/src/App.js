import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//Pages import
import Home from './pages/Home';
import Account from './pages/Account';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Contact from './pages/Contact';

import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.navigation = this.navigation.bind(this)
  }

  navigation() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    )
  }

  render() {
    return (
      <Router>
        <Switch>
          {this.navigation()}
          <Route exact to="/" component={Home} />
          <Route to="/login" component={Login} />
          <Route to="/signup" component={Signup} />
          <Route to="/contact" component={Contact} />
          <Route to="/account" component={Account} />
          <Route to="/Products" component={Products} />
        </Switch>
      </Router>
    )
  }
}

export default App;