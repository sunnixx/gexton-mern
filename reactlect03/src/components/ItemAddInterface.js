import React, { Component } from 'react';

class ItemAddInterface extends Component {

    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this)
    }

    addItem() {
        this.state.todoitems.push(this.state.currentItem)
        this.setState({})
      }

    render() {
        return (
            <div>
                <input type="text" placeholder="Enter Item"
                    onChange={(e) => this.setState({ currentItem: e.target.value })} />
                <button
                    onClick={this.addItem} >
                    Add
                </button>
            </div>
        )
    }
}

export default ItemAddInterface