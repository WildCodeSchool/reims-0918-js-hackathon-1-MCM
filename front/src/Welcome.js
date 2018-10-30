import React, { Component } from "react";


class Welcome extends Component {
  render() {
    return (
      <form>
        <label>
          Name :
          <input
            id="name"
            value={this.props.valeur}
            onChange={this.props.handleChangeName}
            type="text"
          />
        </label>
        <br/>
        <br/>
        <label>
          City :
          <input
            id="city"
            value={this.props.valeur}
            onChange={this.props.handleChangeCity}
            type="text"
          />
        </label>
      </form>
    );
  }
}

export default Welcome;
