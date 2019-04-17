import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../API';
import '../App.css';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = { products: [] }
        this.id = "" //Class variable
        this.handlePurchase = this.handlePurchase.bind(this)
    }

    componentDidMount() {
        api.dummy()
        this.setState({ products: JSON.parse(localStorage.products) })
    }

    handlePurchase(id) {
        this.id = id
        this.setState({}) //This is only to call render() method again
    }

    componentWillUnmount() {
        this.id=""
    }

    render() {
        return (
            <div>
                {this.id !== "" ? <Redirect to={`/product?id=${this.id}`} /> : ""}
                <div className="jumbotron jumbotron-fluid jumbo-bg">
                    <div className="container">
                        {/* <div className="jumbo-bg"> */}
                        <h1 className="display-4" style={{ color: '#fafafa', backgroundColor: '#222222', display: 'inline-block' }}>Lunda clothes</h1> <br />
                        <p className="lead" style={{ color: '#fafafa', backgroundColor: '#222222', display: 'inline-block' }}>Sastay kapray at your doorstep</p>
                        {/* </div> */}
                    </div>
                </div>
                <div className="container">
                    {this.state.products.map(items => {
                        return (
                            <div className="card col-md-4" style={{ width: "18rem", display: 'inline-block', margin: '20px' }}>
                                <img src={items.pic} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{items.name}</h5>
                                    <p className="card-text">Rs. {items.price}</p>
                                    <button className="btn btn-primary" onClick={() => this.handlePurchase(items.id)}>
                                        Buy Now!
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <div>
                        <footer>
                            <div style={{ backgroundColor: '#e3e3e3', height: '100%', width: '100%' }}>
                                <center>
                                    <p>Copyright &copy; All rights reserved</p>
                                </center>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home