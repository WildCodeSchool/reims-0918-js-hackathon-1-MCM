import React from "react";
import { Col } from "reactstrap";

const CandyCard = props => {
  return (
    <Col xs="4" style={{ border: "1px solid black", marginBottom: "2px" }}>
      <img
        style={{
          height: "100px",
          width: "100px",
          float: "right",
          borderRadius: "50%"
        }}
        src={props.image}
        alt="Candypics"
      />
      <p
        style={{
          float: "left",
          fontWeight: "bold"
        }}
      >
        #{props.numero}
      </p>
      <p
        style={{
          float: "center"
        }}
      >
        {props.name}
      </p>
    </Col>
  );
};

export default CandyCard;
