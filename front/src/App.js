import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import { Container, Button } from "reactstrap";
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
      candies: []
    };
    this.fetchAdressApi = this.fetchAdressApi.bind(this);
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

  componentDidMount() {
    this.fetchBonbonsApi();
    this.fetchCityCodeApi(this.state.user.city);
  }

  render() {
    return (
      <div className="App">
        <Button onClick={() => this.fetchAdressApi(this.state.user.citycode)}>
          Test
        </Button>
        <Container>
          <Home
            userName={this.state.user.name}
            userCity={this.state.user.city}
            userRace={this.state.user.race}
            userLogo={this.state.user.logoRace}
            candiesList={this.state.candies}
            adressesList={this.state.adress}
          />
        </Container>
      </div>
    );
  }
}

export default App;
