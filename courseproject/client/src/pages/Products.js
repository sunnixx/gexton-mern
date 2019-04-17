import React, {Component} from 'react'
import api from '../API';

class Products extends Component {
    constructor(props) {
        super(props)
        
        this.id = this.props.location.search.split("=")[1]

        this.state = {item: []}

    }

    componentDidMount() {
        api.product(this.id,(items) => {
            this.setState({item: items.item})
        })

    }

    render() {
        return(
            <div>
                <p>{this.state.item.id}</p>
                <p>{this.state.item.name}</p>
                <p>{this.state.item.pic}</p>
                <p>{this.state.item.price}</p>
                <p>{this.state.item.desc}</p>
            </div>
        )
    }
}

export default Products