import React, { Component } from 'react'
import api from '../API';

class Products extends Component {
    constructor(props) {
        super(props)

        this.id = this.props.location.search.split("=")[1]

        this.state = { item: [] }

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
                        <div className="row" style={{marginTop:'30px'}}>
                            <div className="col-md-4">
                                <button className="btn btn-success">
                                    <i className="fa fa-cart-plus"></i> Add to Cart
                                </button>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
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
            </div>
        )
    }
}

export default Products