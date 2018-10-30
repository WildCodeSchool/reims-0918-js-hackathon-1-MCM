import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Container
} from "reactstrap";

class ModalCandy extends Component {
  render() {
    const closeBtn = (
      <button
        className="close"
        onClick={() => {
          this.props.closeModal();
        }}
      />
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
              <ModalHeader toggle={this.props.closeModal} close={closeBtn}>
                <p
                  style={{
                    fontSize: "40px"
                  }}
                >
                  #{this.props.selectedCandy.numero}{" "}
                  {this.props.selectedCandy.name}
                </p>
              </ModalHeader>
              <ModalBody>
                <img
                  style={{
                    height: "400px",
                    width: "100%"
                  }}
                  src={this.props.selectedCandy.image}
                  alt="Candypics"
                />
              </ModalBody>
              <ModalFooter>Voici du Footer !</ModalFooter>
            </Modal>
          </Container>
        )}
      </div>
    );
  }
}

export default ModalCandy;
