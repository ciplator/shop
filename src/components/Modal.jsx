import React from "react";
import { ModalOverlay, ModalContent, CloseButton } from "./Modal.styles";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
