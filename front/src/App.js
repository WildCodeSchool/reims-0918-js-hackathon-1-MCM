import React, { Component } from "react";
import Home from "./Home";
import { Container, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "Belzebute",
        city: "les enfers",
        logoRace:
          "https://banner2.kisspng.com/20180605/pe/kisspng-werewolf-the-apocalypse-gray-wolf-lycanthrope-5b174b545a6429.0270693815282532683703.jpg",
        race: "Werewolf"
      },
      candies: []
    };
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
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Home
            userName={this.state.user.name}
            userCity={this.state.user.city}
            userRace={this.state.user.race}
            userLogo={this.state.user.logoRace}
            candiesList={this.state.candies}
          />
        </Container>
      </div>
    );
  }
}

export default App;
