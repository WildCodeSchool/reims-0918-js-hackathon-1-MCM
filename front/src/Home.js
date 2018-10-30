import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import Masonry from "react-masonry-component";
import classnames from "classnames";
import CandyCard from "./CandyCard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1"
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <h1>Nom Projet</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h2>Joueurs : {this.props.userName}</h2>
          {/* <img src={this.props.userLogo} /> */}
          <h2>Race : {this.props.userRace}</h2>
          <h2>Ville : {this.props.userCity}</h2>
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
              Adresses
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
            <Row>
              <Col sm="12">
                <h4>Listes d'adresses</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Masonry options={{ fitWidth: true }} style={{ margin: "auto" }}>
              {this.props.candiesList.map(candy => (
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
      </div>
    );
  }
}

export default Home;
