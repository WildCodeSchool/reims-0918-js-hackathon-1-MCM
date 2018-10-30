import React, { Component } from "react";
import Home from "./Home";
import { Container, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Home />
        </Container>
      </div>
    );
  }
}

export default App;
