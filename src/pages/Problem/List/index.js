import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';
import api from '~/services/api';

import { cancelDeliveryRequest } from '~/store/modules/problem/actions';

import {
  Container,
  ListHeader,
  Header,
  ListItem,
  Item,
  ListActions,
  ButtonActions,
} from '~/components/ListItems';
import Modal from './Modal';

export default function Problem() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState();
  const [problems, setProblems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [problemModal, setProblemModal] = useState(null);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('delivery/problems');

      setProblems(response.data);
    }

    loadProblems();
  }, []);

  function handleActionsVisible(id) {
    id = visible === id ? null : id;

    setVisible(id);
  }

  function handleModalShowContent(problem) {
    setProblemModal(problem);
    setVisible(null);
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  async function handleCancelDelivery(id) {
    setVisible(null);
    const r = window.confirm('Confirma o cancelamento desta encomenda?');
    if (r === true) {
      dispatch(
        cancelDeliveryRequest({
          id,
        })
      );
    }
  }

  return (
    <Container>
      <h2>Problemas na entrega</h2>
      <ListHeader>
        <Header width="15%" center>
          Encomenda
        </Header>
        <Header width="75%">Problema</Header>
        <Header width="10%" center>
          Ações
        </Header>
      </ListHeader>
      {problems.map(problem => (
        <ListItem key={problem.id}>
          <Item width="15%" center>{`#${problem.delivery.id}`}</Item>
          <Item width="75%">{problem.description}</Item>
          <Item width="10%" center>
            <ButtonActions
              size={25}
              color="#ddd"
              onClick={() => handleActionsVisible(problem.id)}
            />
            <ListActions visible={visible === problem.id}>
              <li onClick={() => handleModalShowContent(problem)}>
                <MdRemoveRedEye size={15} color="#8E5BE8" />
                <p>Visualizar</p>
              </li>
              <li onClick={() => handleCancelDelivery(problem.id)}>
                <MdDeleteForever size={15} color="#DE3B3B" />
                <p>Cancelar encomenda</p>
              </li>
            </ListActions>
          </Item>
        </ListItem>
      ))}
      <Modal
        showModal={showModal}
        problem={problemModal}
        handleModalClose={handleModalClose}
      />
    </Container>
  );
}
