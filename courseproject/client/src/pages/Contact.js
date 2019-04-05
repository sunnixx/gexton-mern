import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {email: '', contact: '', subject: '', message: ''}
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Contact Us</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input onChange={(e) => this.setState({ email: e.target.value })} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Contact No.</label>
                                <input onChange={(e) => this.setState({ contact: e.target.value })} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Subject</label>
                                <input onChange={(e) => this.setState({ subject: e.target.value })} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Message</label>
                                <textarea className="form-control" onChange={(e) => this.setState({message: e.target.value})}>

                                </textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={this.handleLogin}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact