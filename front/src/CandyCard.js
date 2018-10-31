import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";

const CandyCard = props => {
  return (
    <Fragment>
      {props.finded ? (
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="4"
          style={{
            marginBottom: "15px",
            cursor: "pointer",
            border: "solid 1px black",
            borderRadius: "10px",
            backgroundColor: "rgba(250,250,250,0.8)"
          }}
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
                className="img-fluid"
                style={{
                  height: "75px",
                  width: "100px",
                  borderRadius: "50%"
                }}
                src={props.image}
                alt="Candypics"
              />
            </Col>
          </Row>
        </Col>
      ) : (
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="4"
          style={{
            marginBottom: "15px",
            border: "solid 1px black",
            borderRadius: "10px",
            backgroundColor: "rgba(250,250,250,0.8)"
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
              <p>?????</p>
            </Col>
            <Col className="pr-3" xs="3">
              <img
                className="img-fluid"
                style={{
                  height: "75px",
                  width: "100px",
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
