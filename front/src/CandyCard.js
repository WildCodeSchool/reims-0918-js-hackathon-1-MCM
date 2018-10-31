import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";

const CandyCard = props => {
  return (
    <Fragment>
      {props.finded ? (
        <Col
          xs="4"
          style={{ marginBottom: "15px", cursor: "pointer" }}
          onClick={() => {
            props.candyToModal({ ...props });
          }}
        >
          <Row>
            <Col className="my-auto" xs="4">
              <p
                style={{
                  fontWeight: "bold"
                }}
              >
                #{props.numero}
              </p>
            </Col>
            <Col className="my-auto" xs="5">
              <p>{props.name}</p>
            </Col>
            <Col className="pr-3" xs="3">
              <img
                style={{
                  height: "75px",
                  width: "75px",
                  borderRadius: "50%"
                }}
                src={props.image}
                alt="Candypics"
              />
            </Col>
          </Row>
        </Col>
      ) : (
        <Col xs="4" style={{ marginBottom: "15px" }}>
          <Row>
            <Col className="my-auto" xs="4">
              <p
                style={{
                  fontWeight: "bold"
                }}
              >
                #{props.numero}
              </p>
            </Col>
            <Col className="my-auto" xs="5">
              <p>?????</p>
            </Col>
            <Col className="pr-3" xs="3">
              <img
                style={{
                  height: "75px",
                  width: "75px",
                  borderRadius: "50%",
                  filter: "blur(0.3rem)"
                }}
                src={props.image}
                alt="Candypics"
              />
            </Col>
          </Row>
        </Col>
      )}
    </Fragment>
  );
};

export default CandyCard;
