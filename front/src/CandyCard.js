import React, { Fragment } from "react";
import { Col } from "reactstrap";

const CandyCard = props => {
  return (
    <Fragment>
      {props.finded ? (
        <Col
          xs="4"
          style={{ marginBottom: "15px" }}
          onClick={() => {
            props.candyToModal({ ...props });
          }}
        >
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
      ) : (
        <Col xs="4" style={{ marginBottom: "15px" }}>
          <img
            style={{
              filter: "blur(0.3rem)",
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
            ???
          </p>
        </Col>
      )}
    </Fragment>
  );
};

export default CandyCard;
