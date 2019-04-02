import React, { Component } from 'react';

import api from '../API';
import '../App.css';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = { products: [] }
    }

    componentDidMount() {
        api.dummy()
        this.setState({ products: JSON.parse(localStorage.products) })
    }
    render() {
        return (
            <div>
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
                        <div className="card" style={{ width: "18rem",display:'inline-block', margin: '25px' }}>
                            <img src={items.pic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{items.name}</h5>
                                <p className="card-text">Rs. {items.price}</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Home