import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, Container } from "reactstrap";

class ModalCandy extends Component {
  render() {
    const closeBtn = (
      <button
        className="close"
        style={{ color: "white" }}
        onClick={() => {
          this.props.closeModal();
        }}
      >
        X
      </button>
    );
    return (
      <div>
        {this.props.selectedCandy && (
          <Container>
            <Modal
              isOpen={this.props.modal}
              toggle={this.props.closeModal}
              className={this.props.className}
            >
              <ModalHeader
                toggle={this.props.closeModal}
                close={closeBtn}
                style={{
                  paddingBottom: "0",
                  backgroundColor: "black",
                  color: "white"
                }}
              >
                <p
                  style={{
                    fontSize: "40px",
                    marginBottom: "0"
                  }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "60px",
                      paddingRight: "30px"
                    }}
                  >
                    #{this.props.selectedCandy.numero}
                  </span>{" "}
                  {this.props.selectedCandy.name}
                </p>
              </ModalHeader>
              <ModalBody
                style={{
                  textAlign: "center",
                  backgroundColor: "black",
                  color: "white"
                }}
              >
                <img
                  style={{
                    height: "400px",
                    width: "100%"
                  }}
                  src={this.props.selectedCandy.image}
                  alt="Candypics"
                />

                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "3px"
                  }}
                >
                  Trouvé {this.props.selectedCandy.nbFinded} fois
                </p>
                <p
                  style={{
                    fontSize: "20px"
                  }}
                >
                  Trouvé la première fois au{" "}
                  {this.props.selectedCandy.whereFinded}
                </p>
              </ModalBody>
            </Modal>
          </Container>
        )}
      </div>
    );
  }
}

export default ModalCandy;
