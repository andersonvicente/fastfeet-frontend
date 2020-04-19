import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdAdd,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
  MdSearch,
} from 'react-icons/md';
import api from '~/services/api';
import history from '~/services/history';

import { removeRequest } from '~/store/modules/delivery/actions';

import Status from '~/components/Status';

import {
  Container,
  IconInput,
  ListHeader,
  Header,
  ListItem,
  Avatar,
  Item,
  ButtonActions,
  ListActions,
} from '~/components/ListItems';
import Modal from './Modal';

export default function Delivery() {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState();
  const [query, setQuery] = useState(null);
  const [deliveries, setDeliveries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deliveryModal, setDeliveryModal] = useState(null);

  const reload = useSelector(state => state.delivery.reload);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries', {
        params: { q: query },
      });

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [query, reload]);

  function handleActionsVisible(id) {
    id = visible === id ? null : id;

    setVisible(id);
  }

  function handleQuery(q) {
    setQuery(q);
  }

  function handleNavigateCreate() {
    history.push('/delivery/create');
  }

  function handleNavigateEdit(delivery) {
    history.push('/delivery/edit', { delivery });
  }

  async function handleRemove(id) {
    setVisible(null);
    const r = window.confirm('Confirma a exclusão desta encomenda?');
    if (r === true) {
      dispatch(
        removeRequest({
          id,
        })
      );
    }
  }

  function handleModalShowContent(delivery) {
    setDeliveryModal(delivery);
    setVisible(null);
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
      <form>
        <IconInput>
          <MdSearch size={24} />
          <input
            name="query"
            value={query || ''}
            placeholder="Buscar por encomenda"
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
        <Header width="20%">Destinatário</Header>
        <Header width="20%">Entregador</Header>
        <Header width="15%">Cidade</Header>
        <Header width="15%">Estado</Header>
        <Header width="15%">Status</Header>
        <Header width="5%">Ações</Header>
      </ListHeader>
      {deliveries.map(delivery => (
        <ListItem key={delivery.id}>
          <Item width="8%" center>
            {`#${delivery.id}`}
          </Item>
          <Item width="20%">{delivery.recipient.name}</Item>
          <Item width="20%">
            <Avatar src={delivery.deliveryman.avatar.url} />
            {delivery.deliveryman.name}
          </Item>
          <Item width="15%">{delivery.recipient.city}</Item>
          <Item width="15%">{delivery.recipient.state}</Item>
          <Item width="15%">
            <Status delivery={delivery} />
          </Item>
          <Item width="5%" center>
            <ButtonActions
              size={25}
              color="#ddd"
              onClick={() => handleActionsVisible(delivery.id)}
            />
            <ListActions visible={visible === delivery.id}>
              <li onClick={() => handleModalShowContent(delivery)}>
                <MdRemoveRedEye size={15} color="#8E5BE8" />
                <p>Visualizar</p>
              </li>
              <li onClick={() => handleNavigateEdit(delivery)}>
                <MdModeEdit size={15} color="#4D85EE" />
                <p>Editar</p>
              </li>
              <li onClick={() => handleRemove(delivery.id)}>
                <MdDeleteForever size={15} color="#DE3B3B" />
                <p>Excluir</p>
              </li>
            </ListActions>
          </Item>
        </ListItem>
      ))}
      <Modal
        showModal={showModal}
        delivery={deliveryModal}
        handleModalClose={handleModalClose}
      />
    </Container>
  );
}
