import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import app from '../API';

class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = { username: '', password: '', confirm: '', email: '', redirect: false }

        this.handleSignup = this.handleSignup.bind(this)
    }

    handleAlert(message) {
        return (
            <div class="alert alert-primary" role="alert">
                {message}
            </div>
        )
    }

    handleSignup() {
        if (this.state.password === this.state.confirm) {
            //Insert fetch() code here
            app.signup(this.state.username, this.state.password, this.state.email,
                (message) => {
                    this.setState({redirect: true})
                })
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.redirect === true ? <Redirect to="/" /> : "" }
                <h1>Signup Form</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onChange={(e) => this.setState({ email: e.target.value })} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={(e) => this.setState({ password: e.target.value })} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input onChange={(e) => this.setState({ confirm: e.target.value })} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Username</label>
                            <input onChange={(e) => this.setState({ username: e.target.value })} type="text" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={this.handleSignup}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup