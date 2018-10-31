import React, { Component } from "react";

import Welcome from "./Welcome";

import "./App.css";
import classnames from "classnames";
import CandyCard from "./CandyCard";
import AdressesList from "./AdressesList";
import {
  Container,
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
import ModalCandy from "./ModalCandy";

class App extends Component {
  constructor() {
    super();
    this.state = {
      adress: [],
      user: {
        name: "",
        city: "",
        logoRace:
          "https://banner2.kisspng.com/20180605/pe/kisspng-werewolf-the-apocalypse-gray-wolf-lycanthrope-5b174b545a6429.0270693815282532683703.jpg",
        race: "Werewolf",
        citycode: 0
      },
      candies: [],
      activeTab: "1",
      selectedCandy: {},
      modal: false,
      candiesFind: [],
      isHomeDisplayed: false,
      adressVisited: 0
    };
    this.fetchAdressApi = this.fetchAdressApi.bind(this);
    this.toggle = this.toggle.bind(this);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleCandyToModal = this.handleCandyToModal.bind(this);
    this.checkDoor = this.checkDoor.bind(this);
    this.clearCandiesFind = this.clearCandiesFind.bind(this);
    this.handleDisplayedHome = this.handleDisplayedHome.bind(this);
    this.fetchAdressApi = this.fetchAdressApi.bind(this);
    this.clearStateAdress = this.clearStateAdress.bind(this);
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

  fetchAdressApi(adresseListLength) {
    if (adresseListLength === 0) return;
    if (!adresseListLength) adresseListLength = 10;

    const numberRandom = Math.ceil(Math.random() * Math.floor(25));
    const street = ["rue", "place", "impasse", "quai"];
    const streetRandom = street[Math.floor(Math.random() * Math.floor(3))];

    fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${numberRandom}+${streetRandom}&limit=10&citycode=${
        this.state.user.citycode
      }`
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
              if (
                this.state.adress[i].properties.label.includes(labelAdresse)
              ) {
                isAdresses++;
              }
            }
            if (!isAdresses) {
              this.setState({
                adress: [
                  ...this.state.adress,
                  { ...data.features[selectRandom], visited: false }
                ]
              });
              adresseListLength--;
            }
          }
        }

        this.fetchAdressApi(adresseListLength);
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
                newCandy.finded = false;
                newCandy.nbFinded = 0;
                newCandy.whereFinded = "";
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
  handleChangeName(event) {
    this.setState({ user: { ...this.state.user, name: event.target.value } });
  }

  checkDoor(selectedHouse) {
    const numberCandies = Math.ceil(Math.random() * Math.floor(6));
    const prevStateCandies = [...this.state.candies];
    const candiesFind = [];
    for (let i = 0; i < numberCandies; i++) {
      const randomCandy = Math.floor(
        Math.random() * Math.floor(this.state.candies.length)
      );
      prevStateCandies[randomCandy].whereFinded = prevStateCandies[randomCandy]
        .whereFinded
        ? prevStateCandies[randomCandy].whereFinded
        : selectedHouse.properties.label;
      prevStateCandies[randomCandy].nbFinded++;
      prevStateCandies[randomCandy].finded = true;
      candiesFind.push(prevStateCandies[randomCandy]);
    }
    const newAdressVisited = this.state.adressVisited + 1;
    let newAdresses = [...this.state.adress];
    newAdresses[selectedHouse.index].visited = true;
    this.setState({
      adress: newAdresses,
      candies: prevStateCandies,
      candiesFind: candiesFind,
      adressVisited: newAdressVisited
    });
  }

  clearCandiesFind() {
    this.setState({ candiesFind: [] });
  }

  handleChangeCity(event) {
    this.fetchCityCodeApi(event.target.value);
    this.setState({ user: { ...this.state.user, city: event.target.value } });
  }

  handleDisplayedHome() {
    this.setState({ isHomeDisplayed: true });
  }
  handleCandyToModal(candyInfos) {
    this.setState({
      selectedCandy: candyInfos,
      modal: !this.state.modal
    });
  }

  closeModal() {
    this.setState({
      modal: false
    });
  }

  clearStateAdress() {
    this.setState({
      adress: [],
      adressVisited: 0
    });
  }

  componentDidMount() {
    this.fetchBonbonsApi();
  }

  render() {
    return (
      <div className="App">
        {this.state.isHomeDisplayed ? (
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
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <AdressesList
                  adressesVisited={this.state.adressVisited}
                  adressesList={this.state.adress}
                  checkDoor={this.checkDoor}
                  candiesFind={this.state.candiesFind}
                  clearCandiesFind={this.clearCandiesFind}
                  fetchAdressApi={this.fetchAdressApi}
                  clearStateAdress={this.clearStateAdress}
                  cityUser={this.state.user.city}
                />
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  {this.state.candies.map((candy, index) => (
                    <CandyCard
                      key={index}
                      {...candy}
                      numero={index + 1}
                      candyToModal={this.handleCandyToModal}
                    />
                  ))}
                </Row>
                <ModalCandy
                  selectedCandy={this.state.selectedCandy}
                  modal={this.state.modal}
                  closeModal={this.closeModal}
                />
              </TabPane>
            </TabContent>
          </Container>
        ) : (
          <Welcome
            handleChangeName={this.handleChangeName}
            handleChangeCity={this.handleChangeCity}
            displayedHome={this.handleDisplayedHome}
            fetchAdressApi={this.fetchAdressApi}
          />
        )}
      </div>
    );
  }
}

export default App;
