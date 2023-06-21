import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { ModalBackdrop, ModalStyles } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  return createPortal(
    <ModalBackdrop onClick={onClose}>
      <ModalStyles>{children}</ModalStyles>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
