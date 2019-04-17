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
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/"><i className="fas fa-home"></i> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login"><i className="fas fa-user"></i> Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <Router>
      {this.navigation()}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
          <Route path="/account" component={Account} />
          <Route path="/product" component={Products} />
        </Switch>
      </Router>
    )
  }
}

export default App;