import React, { Component } from "react";
import { Row, Col, Container, Jumbotron, Image } from "reactstrap";

class Welcome extends Component {
  render() {
    return (
      <Container fluid style={{ backgroundColor: "#000000", height:"100vh" }}>
          <img
            src="http://luida.l.u.pic.centerblog.net/gitoi.gif"
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              left: "0px"
            }}
          />
          <img
            src="http://static.wixstatic.com/media/892d1a_1122740ce9de480aca2bacc7bf7845fb.gif"
            style={{
              width: "150px",
              height: "150px",
              position: "absolute",
              right: "50px",
              top: "20px"
            }}
          />
          <img
            src="http://fantazia.f.a.pic.centerblog.net/myspac10.gif"
            style={{ width: "500px", height: "250px" }}
          />
          <br />
          <img
            src="https://media.giphy.com/media/qUHxAava8vmUg/giphy.gif"
            style={{ height: "280px" }}
          />
          <p className="font" style={{ color: "#ff7700" }}>
            Pour démarrer ta quête aux bonbons indique ton Nom et ta Ville
          </p>
        <Row>
          <Col xs="6">
            <label className="font" style={{ color: "#ff7700", width:"100%" }}>
              Nom :
              <input
                className="font"
                id="name"
                value={this.props.valeur}
                placeholder="Entre ton prénom !"
                onChange={this.props.handleChangeName}
                type="text"
              />
            </label>
          </Col>

          <Col xs="6">
            <label className="font" style={{ color: "#ff7700" }}>
              Ville :
              <input
                className="font"
                id="city"
                value={this.props.valeur}
                placeholder="Entre ta ville !"
                onChange={this.props.handleChangeCity}
                type="text"
              />
            </label>
          </Col>

          <Col>
            <button
              className="font"
              style={{ color: "#ff7700" }}
              onClick={() => this.props.displayedHome()}
            >
              Démarre ta chasse
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;