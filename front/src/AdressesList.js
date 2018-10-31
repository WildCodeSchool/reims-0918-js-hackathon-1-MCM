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
      adressesVisited,
      adressesList,
      checkDoor,
      candiesFind,
      clearCandiesFind,
      fetchAdressApi,
      clearStateAdress,
      cityUser
    } = this.props;
    return (
      <div>
        <Row className="pt-5">
          {this.state.selected ? (
            <Fragment>
              <Col className="my-auto" xs="12" sm={{ size: "3", offset: "1" }}>
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
              <Col className="my-auto" xs="12" sm="7">
                <h3>
                  <u>Adresse visitée :</u>
                  <br /> {this.state.selectedHouse.properties.label}
                </h3>
                {candiesFind.length > 0 ? (
                  <Row>
                    <Col xs="12">
                      <p>Bonbons récupérés :</p>
                    </Col>
                    {candiesFind.map((candy, index) => (
                      <Col className="mb-2" key={index} xs="12" sm="6">
                        <Row>
                          <Col className="my-auto" xs="8">
                            {candy.name}
                          </Col>
                          <Col xs="4">
                            <img
                              style={{
                                height: "75px",
                                width: "75px"
                              }}
                              className="img-fluid rounded-circle"
                              src={candy.image}
                              alt={candy.name}
                            />
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <Button onClick={() => checkDoor(this.state.selectedHouse)}>
                    Sonner à la porte
                  </Button>
                )}
              </Col>
              <Col xs="12">
                <Button
                  className="mt-5 mb-2"
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
                <h2>Liste des maisons à visiter à {cityUser} :</h2>
              </Col>
              {adressesList.map((adresse, index) => (
                <Col className="text-center" xs="6" key={index}>
                  {adresse.visited ? (
                    <p className="text-secondary">{adresse.properties.name}</p>
                  ) : (
                    <p
                      style={{
                        cursor: "pointer",
                        color: "purple",
                        fontSize: "15px"
                      }}
                      onClick={() => this.changeHouse(adresse, index)}
                    >
                      {adresse.properties.name}
                    </p>
                  )}
                </Col>
              ))}
              {adressesVisited === 10 && (
                <Button
                  onClick={() => {
                    clearStateAdress();
                    fetchAdressApi();
                  }}
                >
                  Afficher 10 nouvelles adresses
                </Button>
              )}
            </Fragment>
          )}
        </Row>
        <img
          src="http://petitemimine.p.e.pic.centerblog.net/2fc180e7.gif"
          alt="sorciére"
          style={{
            width: "150px",
            height: "150px",
            marginTop: "0px",
            right: "50px",
            top: "20px"
          }}
        />
      </div>
    );
  }
}

export default AdressesList;
