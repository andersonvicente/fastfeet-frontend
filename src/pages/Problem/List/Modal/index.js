import React from 'react';
import { Content } from './styles';

export default function Modal({ showModal, problem, handleModalClose }) {
  return (
    <Content show={showModal} onClick={handleModalClose}>
      <div>
        <h6>VISUALIZAR PROBLEMA</h6>
        <span>{`${problem && problem.description}`}</span>
      </div>
    </Content>
  );
}
