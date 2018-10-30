import React, { Component } from "react";

import Welcome from "./Welcome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        city: ""
      }
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
   
  }
  handleChangeName(event) {
    this.setState({ user:{...this.state.user,name:event.target.value}});
  }

  handleChangeCity(event) {
    this.setState({ user:{...this.state.user,city:event.target.value}});
  }

  render() {
    return (
      <div>
        <Welcome handleChangeName={this.handleChangeName} handleChangeCity={this.handleChangeCity} />
      </div>
    );
  }
}

export default App;
