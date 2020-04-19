import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  MdAdd,
  MdModeEdit,
  MdDeleteForever,
  MdSearch,
} from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';
import { removeRequest } from '~/store/modules/deliveryman/actions';

import {
  Container,
  IconInput,
  ListHeader,
  Header,
  ListItem,
  Avatar,
  Item,
  ListActions,
  ButtonActions,
} from '~/components/ListItems';

export default function Deliveryman() {
  const [visible, setVisible] = useState();
  const [query, setQuery] = useState(null);
  const [deliverymen, setDeliverymen] = useState([]);
  const [reload, setReload] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('deliverymen', {
        params: { q: query },
      });

      setDeliverymen(response.data);
      setReload(false);
    }

    loadDeliverymen();
  }, [query, reload]);

  async function handleNavigateCreate() {
    history.push('/deliveryman/create');
  }

  async function handleActionsVisible(id) {
    id = visible === id ? null : id;

    setVisible(id);
  }

  async function handleNavigateEdit(deliveryman) {
    history.push('/deliveryman/edit', { deliveryman });
  }

  async function handleRemove(id) {
    const r = window.confirm("Confirma a exclusão deste entregador?");
    if (r === true) {
      dispatch(removeRequest({
        id
      }));
      setReload(true);
    }
  }

  async function handleQuery(q) {
    setQuery(q);
  }

  return (
    <Container>
      <h2>Gerenciando entregadores</h2>
      <form>
        <IconInput>
          <MdSearch size={24} />
          <input
            name="query"
            value={query || ''}
            placeholder="Buscar por entregadores"
            onChange={e => handleQuery(e.target.value)}
          />
        </IconInput>
        <button type="button" onClick={handleNavigateCreate}>
          <MdAdd size={28} />
          CADASTRAR
        </button>
      </form>
      <ListHeader>
        <Header width="8%" center>
          ID
        </Header>
        <Header width="24%" center>
          Foto
        </Header>
        <Header width="30%">Nome</Header>
        <Header width="30%">Email</Header>
        <Header width="8%" center>
          Ações
        </Header>
      </ListHeader>
      {deliverymen.map(deliveryman => (
        <ListItem key={deliveryman.id}>
          <Item width="8%" center>
            {`#${deliveryman.id}`}
          </Item>
          <Item width="24%" center>
            <Avatar src={deliveryman.avatar ? deliveryman.avatar.url : `https://api.adorable.io/avatars/40/${deliveryman.name}.png`} />
          </Item>
          <Item width="30%">{deliveryman.name}</Item>
          <Item width="30%">{deliveryman.email}</Item>
          <Item width="8%" center>
            <ButtonActions
              size={25}
              color="#ddd"
              onClick={() => handleActionsVisible(deliveryman.id)}
            />
            <ListActions visible={visible === deliveryman.id}>
              <li onClick={() => handleNavigateEdit(deliveryman)}>
                <MdModeEdit size={15} color="#4D85EE" />
                <p>Editar</p>
              </li>
              <li onClick={() => handleRemove(deliveryman.id)}>
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
