import React, {Component} from 'react';
import './App.css'

import A from './components/A';
import B from './components/B';
import Header from './components/Header';

class App extends Component {
  render() {
    return(
      <div className="container">
        <Header />
        <div className="column">
          <A />
        </div>
        <div className="column">
          <B />
        </div>
      </div>
    )
  }
}

// const styles = {
//   h1: {
//     "color" : "blue"
//   }
// }

export default App