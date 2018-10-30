import React, { Component } from "react";
import "./App.css";
import AdressesList from "./AdressesList";
import { Button } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: { name: "Mathieu", city: "reims", citycode: 0 },
      adress: []
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

  componentDidMount() {
    this.fetchCityCodeApi(this.state.user.city);
  }

  render() {
    return (
      <div className="App">
        <Button onClick={() => this.fetchAdressApi(this.state.user.citycode)}>
          Test
        </Button>
        <AdressesList adressesList={this.state.adress} />
      </div>
    );
  }
}

export default App;
