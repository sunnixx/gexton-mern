import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {list: []}
    
    this.fetchDataFromServer = this.fetchDataFromServer.bind(this);
  }
  
  fetchDataFromServer() {
    fetch('http://localhost:5000/list')
    .then(response => {
      response.json().then(msg => {
        this.setState({list: msg})
      })
    }) 
  }

  componentDidMount() {
    this.fetchDataFromServer()
  }

  render() {
    return(
      <div style={{margin:"0 auto",width: "500px"}}>
        <table border={1}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
            {this.state.list.map(items => {
              return(
                <tr>
                  <td>{items.name}</td>
                  <td>{items.department}</td>
                  <td>{items.salary}</td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;