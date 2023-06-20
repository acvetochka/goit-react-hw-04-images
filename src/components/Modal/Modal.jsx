import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import { ModalBackdrop, ModalStyles } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  onClickBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.onClickBackdrop}>
        <ModalStyles>{this.props.children}</ModalStyles>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
