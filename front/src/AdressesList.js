import React, { Component, Fragment } from "react";
import { Row, Col, Button } from "reactstrap";
import door from "./images/door-1.png";

class AdressesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selectedHouse: ""
    };
  }

  closeDetailHouse() {
    this.setState({ selected: false });
  }

  changeHouse(house) {
    this.setState({ selected: true, selectedHouse: house });
  }

  srcImg(urlGoogle) {
    const req = new XMLHttpRequest();
    req.open("GET", urlGoogle, false);
    req.send(null);

    if (req.status === 200) {
      return urlGoogle;
    } else {
      return door;
    }
  }

  render() {
    const adressesList = this.props.adressesList;
    return (
      <div>
        <Row className="pt-5">
          {this.state.selected ? (
            <Fragment>
              <Col xs={{ size: "3", offset: "1" }}>
                {/* <img className="img-fluid" src={door} alt="door" /> */}
                <img
                  className="img-fluid"
                  src={this.srcImg(
                    `https://maps.googleapis.com/maps/api/streetview?location=${
                      this.state.selectedHouse.geometry.coordinates[1]
                    },${
                      this.state.selectedHouse.geometry.coordinates[0]
                    }&size=456x456&key=${process.env.REACT_APP_API_CODE}`
                  )}
                  alt="google street view"
                />
              </Col>
              <Col xs="7">
                <p>{this.state.selectedHouse.properties.label}</p>
              </Col>
              <Col xs="12">
                <Button onClick={() => this.closeDetailHouse()}>
                  Retourner à la liste des maisons
                </Button>
              </Col>
            </Fragment>
          ) : (
            <Fragment>
              <Col xs="12">
                <h2>Liste des maisons à visiter :</h2>
              </Col>
              {adressesList.map((adresse, index) => (
                <Col className="text-left" xs="6" key={index}>
                  <p onClick={() => this.changeHouse(adresse)}>
                    - {adresse.properties.label}
                  </p>
                </Col>
              ))}
            </Fragment>
          )}
        </Row>
      </div>
    );
  }
}

export default AdressesList;
