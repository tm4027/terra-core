import React from 'react';
import Modal from 'terra-modal';

class ModalCloseOnOutsideClick extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpened: true });
  }

  handleCloseModal() {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <div>
        <Modal
          ariaLabel="Modal disable close on outside click"
          isOpened={this.state.isOpened}
          closeOnOutsideClick={false}
          onRequestClose={this.handleCloseModal}
        >
          <div>
            <h1>Modal disable close on outside click</h1>
            <br />
            <p>You can close the modal by:</p>
            <ul>
              <li>- Pressing the ESC key</li>
              <li>- Clicking on the close button</li>
            </ul>
            <br />
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </Modal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default ModalCloseOnOutsideClick;