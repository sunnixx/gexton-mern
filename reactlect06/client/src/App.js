import React, {Component} from 'react';

import app from './API';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {loginusername: '', loginpassword: '', signupusername: '', signuppassword: ''}

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleLogin() {
    app.login(this.state.loginusername, this.state.loginpassword)
  }

  handleSignup() {
    app.signup(this.state.signupusername,this.state.signuppassword)
  }

  render() {
    return (
      <div>
        {/* <form> */}
          <h1>Login</h1>
          <input type="text" placeholder="Username" onChange={(e) => this.setState({loginusername: e.target.value})} />
          <input type="password" placeholder="Password" onChange={(e) => this.setState({loginpassword: e.target.value})} />
          <button onClick={this.handleLogin}>Send</button>
          
          <h1>Signup</h1>
          <input type="text" placeholder="Username" onChange={(e) => this.setState({signupusername: e.target.value})} />
          <input type="password" placeholder="Password" onChange={(e) => this.setState({signuppassword: e.target.value})} />
          <button onClick={this.handleSignup}>Send</button>
        {/* </form> */}
      </div>
    )
  }
}

export default App;