import React, { Component } from 'react'
import api from '../API';

class Products extends Component {
    constructor(props) {
        super(props)

        this.id = this.props.location.search.split("=")[1]

        this.state = { item: [], showBuy: false }

        this.buyNow = this.buyNow.bind(this);
        this.creditCard = this.creditCard.bind(this);
    }

    buyNow() {
        if(!this.state.showBuy) {
            this.setState({showBuy: true})
        } else {
            this.setState({showBuy: false})
        }
    }

    creditCard() {
        return (
            <div>
                <div style={{ marginTop: 40 }}>
                    <h3>Basic information</h3>
                </div>

                <div className="row" style={{ marginTop: 40 }}>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="firstname">First Name</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label for="firstname">Address</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="lastname">Last Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="firstname">Contact No</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: 20 }}>
                    <h3>Credit Card</h3>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="firstname">Card No</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Month Exp</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Year Exp</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2">
                        <div className="form-group">
                            <label for="firstname">CVC</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" style={{ marginTop: 32 }}>Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        api.product(this.id, (items) => {
            this.setState({ item: items.item })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        {/* product pic */}
                        <img src={this.state.item.pic} alt="this is a product image" />
                    </div>

                    <div className="col-md-6">
                        {/* Product details */}
                        <h3>{this.state.item.name}</h3>
                        <h2 style={{ color: '#3498db' }}>Rs. {this.state.item.price}</h2>
                        <h4 style={{ color: '#95a5a6' }}>{this.state.item.desc}</h4>
                        <div className="row" style={{ marginTop: '30px' }}>
                            <div className="col-md-4">
                                <button className="btn btn-success">
                                    <i className="fa fa-cart-plus"></i> Add to Cart
                                </button>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary" data-toggle="modal" onClick={this.buyNow} data-target="#myModal">
                                    <i className="fa fa-money-bill-alt"></i> Buy Now!
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3" style={{ backgroundColor: '#e3e3e3' }}>
                        {/* Delivery details */}
                        <p style={{ marginTop: '10px', paddingBottom: '10px', color: '#222222', borderBottom: '1px solid #7f8c8d' }}>
                            <i className="fa fa-truck" style={{ paddingRight: '10px' }}></i>
                            Main Autobhan road, Latifabad Hyderabad
                        </p>
                        <p style={{ marginTop: '10px', paddingBottom: '10px', color: '#222222', borderBottom: '1px solid #7f8c8d' }}>
                            <i className="fa fa-money-bill-wave" style={{ paddingRight: '10px' }}></i>
                            Cash on delivery
                        </p>
                        <p style={{ marginTop: '10px', paddingBottom: '10px', color: '#222222', borderBottom: '1px solid #7f8c8d' }}>
                            <i className="fa fa-truck-loading" style={{ paddingRight: '10px' }}></i>
                            Home delivery
                        </p>
                    </div>
                </div>
                {this.state.showBuy !== false ? this.creditCard() : ""}
            </div>
        )
    }
}

export default Products