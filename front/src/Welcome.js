import React, { Component } from "react";
import { Row, Col, Container, Jumbotron,Image } from "reactstrap";

class Welcome extends Component {
  render() {
    return (
      <Container style={{backgroundColor:"#000000"}}>
        
        <Jumbotron style={{padding:"0", margin:"0"}}>
          <img src="http://fantazia.f.a.pic.centerblog.net/myspac10.gif" style={{width:"500px",height:"80px"}}/>
          <br/>
          <img src="https://media.giphy.com/media/qUHxAava8vmUg/giphy.gif" style={{height:"80px"}}/>
          <p style={{color:"#ff7700"}} >
            Pour démarrer ta quête aux bonbons
            indique ton Nom et ta Ville
          </p>
        </Jumbotron>
        <Row style={{color:"#ff7700"}}>
          <Col xs="6">
            <label>
              Nom :
              <input
                id="name"
                value={this.props.valeur}
                placeholder="Entre ton prénom !"
                onChange={this.props.handleChangeName}
                type="text"
              />
            </label>
          </Col>

          <Col xs="6">
            <label>
              Ville :
              <input
                id="city"
                value={this.props.valeur}
                placeholder="Entre ta ville !"
                onChange={this.props.handleChangeCity}
                type="text"
              />
            </label>
          </Col>

          <Col>
            <button style={{color:"#ff7700"}} onClick={""} >Démarre ta chasse</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;
