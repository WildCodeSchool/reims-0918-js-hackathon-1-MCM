import React, { Component } from "react";
import { Row, Col, Container, Input } from "reactstrap";

class Welcome extends Component {
  render() {
    const fetchAdressApi = this.props.fetchAdressApi;
    return (
      <Container fluid style={{ height: "100vh" }}>
        <img
          src="http://luida.l.u.pic.centerblog.net/gitoi.gif"
          alt="araignée"
          style={{
            width: "100px",
            height: "100px",
            position: "absolute",
            left: "0px"
          }}
        />
        <img
          src="http://static.wixstatic.com/media/892d1a_1122740ce9de480aca2bacc7bf7845fb.gif"
          alt="sorciére"
          style={{
            width: "150px",
            height: "150px",
            marginTop: "0px",
            right: "50px",
            top: "20px"
          }}
        />

        <h3
          className="font  mb-4"
          style={{
            color: "#ff7700",
            marginTop: "100px",
            fontSize: 40,
            border: "solid 1px black",
            backgroundColor: "rgba(250,250,250,0.8)"
          }}
        >
          Pour démarrer ta chasse aux bonbons indique ton Prénom et ta Ville
        </h3>
        <Row>
          <Col
            className="mt-5"
            style={{
              border: "solid 1px black",
              borderRadius: "10px",
              backgroundColor: "rgba(250,250,250,0.8)"
            }}
            xs="12"
            sm={{ size: "4", offset: "4" }}
          >
            <label
              className="font mt-3"
              style={{ color: "#ff7700", fontSize: 20 }}
            >
              <span style={{ fontSize: 30 }}>Prénom</span>
            </label>
            <br />
            <input
              id="name"
              value={this.props.valeur}
              placeholder="Entre ton prénom !"
              onChange={this.props.handleChangeName}
              type="text"
            />
            <br />
            <label
              className="font mt-3"
              style={{ color: "#ff7700", fontSize: 20 }}
            >
              <span style={{ fontSize: 30 }}>Ville</span>
            </label>
            <br />
            <Input
              onChange={this.props.handleChangeCity}
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
            >
              <option>Reims</option>
            </Input>
            <br />
            <button
              className="font my-3"
              style={{ color: "#ff7700" }}
              onClick={() => {
                this.props.displayedHome();
                fetchAdressApi();
              }}
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
