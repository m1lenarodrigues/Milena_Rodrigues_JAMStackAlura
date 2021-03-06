/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { CloseIcon } from '../../patterns/formContato/icons';
import {motion} from 'framer-motion';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0; 
  transition: .3s;
  z-index: 100;
  width:100%;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      onClick={(event) => {
        const isSafeArea = event.target.closest(
          '[data-modal-safe-area="true"]',
        );
        if (!isSafeArea) onClose();
      }}
      isOpen={isOpen}
    >
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.9,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        {children({
          'data-model-safe-area': 'true',
          buttonClose: (
            <CloseIcon onClick={onClose} />
          ),
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
