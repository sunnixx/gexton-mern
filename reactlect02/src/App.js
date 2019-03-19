import React, {Component} from 'react';
import './App.css'

import A from './components/A';
import B from './components/B';
import Header from './components/Header';

import image01 from './assets/img/1.jpg'
import image02 from './assets/img/2.jpg'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {text:''}
    this.time = 0

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    // this.setState({
    //   text: "Bye World"
    // })
    // this.setState({
    //   text: "Bye World",
    //   something: "Hello",
    //   anything: "Bye"
    // })
    setInterval(
      function(){
        this.time++;
        this.setState({timer:this.time})
      }.bind(this),1000
    )
  }

  render() {
    // this.handleClick()
    console.log("RENDER")
    return(
      <div className="container">
        <input type="text" onChange={(e) => this.setState({text:e.target.value})} />
        <p>{this.state.text}</p>
        {/* {this.state.timer} */}
        {/* <p>{this.state.text}</p>
        <p>{this.state.something}</p>
        <p>{this.state.anything}</p> */}
        {/* <button onClick={this.handleClick}>Click</button> */}
        {/* <Header heading="First Heading" image={image01} width={300} height={200} />
        <div className="column">
          <A />
        </div>
        <div className="column">
          <B />
        </div>
        <Header image={image02} width={200} height={100} heading="Second Heading" />
        <div className="column">
          <A />
        </div>
        <div className="column">
          <B />
        </div>
        <Header heading="Third Heading" /> */}
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


// immutable variables