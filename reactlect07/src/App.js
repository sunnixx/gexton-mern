import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12"> 
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam possimus odio id praesentium cumque, labore neque et consequuntur corrupti itaque ducimus laboriosam assumenda, eaque qui aliquid maxime tenetur ea ratione.
          </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam possimus odio id praesentium cumque, labore neque et consequuntur corrupti itaque ducimus laboriosam assumenda, eaque qui aliquid maxime tenetur ea ratione.
          </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam possimus odio id praesentium cumque, labore neque et consequuntur corrupti itaque ducimus laboriosam assumenda, eaque qui aliquid maxime tenetur ea ratione.
          </p>
          </div>
        </div>
        <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
        </div>

        <div className="card" style={{width: "18em"}}>
          <img src="https://via.placeholder.com/150" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Hello World</h5>
            <p className="card-text">Hello this is a card title paragraph</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;