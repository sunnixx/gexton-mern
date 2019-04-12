import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../API';

class Account extends Component {

    constructor(props) {
        super(props)

        this.state = { username: '', state: true }

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        api.logout((message) => {
            if (message.state === false) {
                localStorage.user = '';
                this.setState({ state: false })
            }
        })
    }

    componentDidMount() {
        console.log(this.state.state)
        api.verfiy((state) => {
            console.log("State", state)
            if(!state) {
                this.setState({state: false})
            } else {
                this.setState({username: JSON.parse(localStorage.user.username)})
            }
        })
    }

    componentWillUnmount() {
        this.setState({state: ''})
    }

    render() {
        return (
            <div>
                {this.state.state === false ? <Redirect to="/" /> : ""}
                <h1>Welcome Mr. {this.state.username}</h1>
                <button className='btn btn-primary' onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

export default Account;