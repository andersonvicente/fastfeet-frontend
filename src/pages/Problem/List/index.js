import React, { useState, useEffect } from 'react';
import { MdMoreHoriz, MdModeEdit, MdDeleteForever } from 'react-icons/md';
import api from '~/services/api';

import {
  Container,
  ListHeader,
  Header,
  ListItem,
  Item,
  ListActions,
} from '~/styles/manager';

export default function Problem() {
  const [visible, setVisible] = useState();
  const [problems, setProblems] = useState([]);

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
            <MdMoreHoriz
              size={25}
              color="#ddd"
              onClick={() => handleActionsVisible(problem.id)}
            />
            <ListActions visible={visible === problem.id}>
              <li>
                <MdModeEdit size={15} color="#4D85EE" />
                <p>Editar</p>
              </li>
              <li>
                <MdDeleteForever size={15} color="#DE3B3B" />
                <p>Excluir</p>
              </li>
            </ListActions>
          </Item>
        </ListItem>
      ))}
    </Container>
  );
}
