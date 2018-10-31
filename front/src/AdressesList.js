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

  changeHouse(house, index) {
    this.setState({
      selected: true,
      selectedHouse: { ...house, index: index }
    });
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
    const {
      adressesList,
      checkDoor,
      candiesFind,
      clearCandiesFind
    } = this.props;
    return (
      <div>
        <Row className="pt-5">
          {this.state.selected ? (
            <Fragment>
              <Col xs={{ size: "3", offset: "1" }}>
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
                {candiesFind.length > 1 ? (
                  <Fragment>
                    {candiesFind.map((candy, index) => (
                      <p key={index}>{candy.name}</p>
                    ))}
                  </Fragment>
                ) : (
                  <Button onClick={() => checkDoor(this.state.selectedHouse)}>
                    Sonner à la porte
                  </Button>
                )}
              </Col>
              <Col xs="12">
                <Button
                  onClick={() => {
                    this.closeDetailHouse();
                    clearCandiesFind();
                  }}
                >
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
                  {adresse.visited ? (
                    <p className="text-secondary">
                      - {adresse.properties.label}
                    </p>
                  ) : (
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => this.changeHouse(adresse, index)}
                    >
                      - {adresse.properties.label}
                    </p>
                  )}
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
