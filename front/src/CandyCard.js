import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";

const CandyCard = props => {
  return (
    <div>
      <Card
        style={{ width: "250px", height: "400px" }}
        className="d-flex justify-content-center"
      >
        <CardImg
          top
          className="img-fluid"
          style={{ height: "250px" }}
          src={props.image}
          alt="Candypics"
        />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText className="mt-3">First Catch(launch the map)</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CandyCard;
