import React, {Component} from 'react';

import ItemAddInterface from './components/ItemAddInterface';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {todoitems: [],currentItem: ''}

    this.editItem = this.editItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  editItem(e) {
    let id = e.target.parentNode.id
    let item = prompt("Enter new item")
    this.state.todoitems[id] = item
    this.setState({})
  }

  deleteItem(e) {
    let id = e.target.parentNode.id
    this.state.todoitems.splice(id,1)
    this.setState({})
  }

  render() {
    return (
      <div>
        <ItemAddInterface />
        {this.state.todoitems.map((items,index) => {
          return (
            <div id={index}>
              <input type="checkbox" />
              <p style={{display:"inline-block"}}>{items}</p>
              <button onClick={this.deleteItem}>Delete</button>
              <button onClick={this.editItem}>Edit</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;