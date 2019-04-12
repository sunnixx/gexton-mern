import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import app from '../API';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {email: '', password: '', status: false, message: ''}

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin() {
        app.login(this.state.email,this.state.password,(message) => {
            if(!message.state) {
                this.setState({message:message.message})
            } else {
                localStorage.user = JSON.stringify({
                    username: message.username,
                    email: message.email
                })
                this.setState({status:true})
            }
        })
    }

    render() {
        return (
            <div className="container">
                    <h1>Login Form</h1>
                    {this.state.status === false ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : <Redirect to="/account" />}
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onChange={(e) => this.setState({email: e.target.value})} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={(e) => this.setState({password: e.target.value})} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login