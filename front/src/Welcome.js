import React, { Component } from "react";
import { Row, Col, Container, Jumbotron } from "reactstrap";

class Welcome extends Component {
  render() {
    return (
      <Container >
        <Jumbotron >
          <h1 className="display-3 text-warning " >Halloween</h1>
          <p className="lead text-warning " >
            Pour démarrer ta quête aux bonbons
            indique ton Nom et ta Ville
          </p>
        </Jumbotron>
        <Row>
          <Col xs="6">
            <label>
              Name :
              <input
                id="name"
                value={this.props.valeur}
                onChange={this.props.handleChangeName}
                type="text"
              />
            </label>
          </Col>

          <Col xs="6">
            <label>
              City :
              <input
                id="city"
                value={this.props.valeur}
                onChange={this.props.handleChangeCity}
                type="text"
              />
            </label>
          </Col>

          <Col>
            <button onClick={""}>Démarre ta chasse</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;
