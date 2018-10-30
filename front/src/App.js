import React, { Component } from "react";
<<<<<<< HEAD

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
=======
import "./App.css";
import Masonry from "react-masonry-component";
import classnames from "classnames";
import CandyCard from "./CandyCard";
import AdressesList from "./AdressesList";
import {
  Container,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      adress: [],
      user: {
        name: "Belzebute",
        city: "Reims",
        logoRace:
          "https://banner2.kisspng.com/20180605/pe/kisspng-werewolf-the-apocalypse-gray-wolf-lycanthrope-5b174b545a6429.0270693815282532683703.jpg",
        race: "Werewolf",
        citycode: 0
      },
      candies: [],
      activeTab: "1"
    };
    this.fetchAdressApi = this.fetchAdressApi.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  fetchCityCodeApi(cityName) {
    fetch(
      `https://geo.api.gouv.fr/communes?nom=${encodeURI(
        cityName
      )}&fields=codes&format=json&geometry=centre`
    )
      .then(results => results.json()) // conversion du résultat en JSON
      .then(data => {
        this.setState({
          user: { ...this.state.user, citycode: data[0].code }
        });
      });
  }

  fetchAdressApi(citycode, adresseListLength) {
    if (adresseListLength === 0) return;
    if (!adresseListLength) adresseListLength = 10;

    const numberRandom = Math.ceil(Math.random() * Math.floor(25));
    const street = ["rue", "place", "impasse", "quai"];
    const streetRandom = street[Math.floor(Math.random() * Math.floor(3))];

    fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${numberRandom}+${streetRandom}&limit=10&citycode=${citycode}`
    )
      .then(results => results.json()) // conversion du résultat en JSON
      .then(data => {
        if (data.features) {
          const selectRandom = Math.floor(
            Math.random() * Math.floor(data.features.length)
          );
          const labelAdresse = data.features[selectRandom].properties.label;
          if (labelAdresse[0] >= 0 && labelAdresse[0] <= 9) {
            let isAdresses = 0;
            for (let i = 0; i < this.state.adress.length; i++) {
              if (this.state.adress[i].includes(labelAdresse)) {
                isAdresses++;
              }
            }
            if (!isAdresses) {
              this.setState({
                adress: [...this.state.adress, labelAdresse]
              });
              adresseListLength--;
            }
          }
        }

        this.fetchAdressApi(citycode, adresseListLength);
      });
  }

  fetchBonbonsApi() {
    for (let i = 1; i < 6; i++) {
      fetch(`https://fr.openfoodfacts.org/categorie/bonbons/${i}.json`)
        .then(results => results.json()) // conversion du résultat en JSON
        .then(data => {
          this.setState({
            candies: [
              ...this.state.candies,
              ...data.products.map(candy => {
                let newCandy = {};
                newCandy.name = candy.product_name_fr;
                newCandy.image = candy.image_url;
                newCandy.brands = candy.brands;
                return newCandy;
              })
            ]
          });
        });
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    this.fetchBonbonsApi();
    this.fetchCityCodeApi(this.state.user.city);
>>>>>>> ae4bf106e83b45c00970f9b85a8cdc94ff020f85
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <Welcome handleChangeName={this.handleChangeName} handleChangeCity={this.handleChangeCity} />
=======
      <div className="App">
        <Button onClick={() => this.fetchAdressApi(this.state.user.citycode)}>
          Test
        </Button>
        <Container>
          <h1>Nom Projet</h1>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h2>Joueurs : {this.state.user.name}</h2>
            <h2>Race : {this.state.user.race}</h2>
            <h2>Ville : {this.state.user.city}</h2>
          </div>
          <Nav tabs className="justify-content-center">
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames("navlink", {
                  active: this.state.activeTab === "1"
                })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Listes des Adresses
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames("navlink", {
                  active: this.state.activeTab === "1"
                })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                BonbonsDex
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames("navlink", {
                  active: this.state.activeTab === "1"
                })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                Historique
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <AdressesList adressesList={this.state.adress} />
            </TabPane>
            <TabPane tabId="2">
              <Masonry options={{ fitWidth: true }} style={{ margin: "auto" }}>
                {this.state.candies.map(candy => (
                  <CandyCard {...candy} />
                ))}
              </Masonry>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <h4>Historique de la quête bonbon</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
>>>>>>> ae4bf106e83b45c00970f9b85a8cdc94ff020f85
      </div>
    );
  }
}

export default App;
