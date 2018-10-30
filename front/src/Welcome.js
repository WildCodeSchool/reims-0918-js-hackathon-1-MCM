import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

class Welcome extends Component {
  render() {
    return (
      <Container>
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
              <button onClick={""}>Ajouter 1</button>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Welcome;
