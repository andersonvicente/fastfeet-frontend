import React, { useState, useEffect } from 'react';
import {
  MdAdd,
  MdMoreHoriz,
  MdModeEdit,
  MdDeleteForever,
  MdSearch,
} from 'react-icons/md';
import api from '~/services/api';

import {
  Container,
  IconInput,
  ListHeader,
  Header,
  ListItem,
  Item,
  ListActions,
} from '~/styles/manager';

export default function Recipient() {
  const [visible, setVisible] = useState();
  const [query, setQuery] = useState(null);
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients', {
        params: { q: query },
      });

      setRecipients(response.data);
    }

    loadRecipients();
  }, [query]);

  function handleActionsVisible(id) {
    id = visible === id ? null : id;

    setVisible(id);
  }

  function handleQuery(q) {
    setQuery(q);
  }

  return (
    <Container>
      <h2>Gerenciando destinatários</h2>
      <form>
        <IconInput>
          <MdSearch size={24} />
          <input
            name="query"
            value={query || ''}
            placeholder="Buscar por destinatários"
            onChange={e => handleQuery(e.target.value)}
          />
        </IconInput>
        <button type="button">
          <MdAdd size={28} />
          CADASTRAR
        </button>
      </form>
      <ListHeader>
        <Header width="10%" center>
          ID
        </Header>
        <Header width="30%">Nome</Header>
        <Header width="50%">Endereço</Header>
        <Header width="10%" center>
          Ações
        </Header>
      </ListHeader>
      {recipients.map(recipient => (
        <ListItem key={recipient.id}>
          <Item width="10%" center>
            {`#${recipient.id}`}
          </Item>
          <Item width="30%">{recipient.name}</Item>
          <Item width="50%">{`${recipient.address_street}, ${recipient.address_number} - ${recipient.address_complement}, ${recipient.city} - ${recipient.state}`}</Item>
          <Item width="10%" center>
            <MdMoreHoriz
              size={25}
              color="#ddd"
              onClick={() => handleActionsVisible(recipient.id)}
            />
            <ListActions visible={visible === recipient.id}>
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
