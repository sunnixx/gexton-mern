import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.heading}</h1>
                <img 
                    src={this.props.image} 
                    height={this.props.height} 
                    width={this.props.width} 
                    alt="this is an image"
                    />
            </header>
        )
    }
}

export default Header