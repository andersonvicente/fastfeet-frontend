import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import Select from 'react-select';

import { Form, Input } from '@rocketseat/unform';
import { Back, Button } from '~/styles/form';
import history from '~/services/history';
import api from '~/services/api';

import { createRequest, updateRequest } from '~/store/modules/delivery/actions';

import { Container, BoxSelect, BoxInput } from './styles';

export default function DeliveryForm({ data }) {
  const deliveryEdit = useMemo(() => {
    return data ? data.delivery : null;
  }, [data]);

  const [recipients, setRecipients] = useState([]);
  const [deliveryman, setDeliveryman] = useState([]);
  const [recipient, setRecipient] = useState(null);
  const [deliverymen, setDeliverymen] = useState(null);
  const [product, setProduct] = useState('');
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  async function loadRecipients() {
    const response = await api.get('recipients');

    const select = response.data.map(item => {
      return { value: item.id, label: item.name };
    });

    setRecipients(select);
  }

  async function loadDeliveryman() {
    const response = await api.get('deliverymen');

    const select = response.data.map(item => {
      return { value: item.id, label: item.name };
    });

    setDeliveryman(select);
  }

  async function loadData() {
    if (deliveryEdit) {
      setTitle('Edição de encomendas');
      setRecipient(deliveryEdit.recipient.id);
      setDeliverymen(deliveryEdit.deliveryman.id);
      setProduct(deliveryEdit.product);
    } else {
      setTitle('Cadastro de encomendas');
    }
  }

  useEffect(() => {
    loadRecipients();
    loadDeliveryman();
    loadData();
  }, []);

  function HandleNavigateBack() {
    history.goBack();
  }

  function HandleChangeRecipient(selectedOption) {
    setRecipient(selectedOption.value);
  }

  function HandleChangeDeliverymen(selectedOption) {
    setDeliverymen(selectedOption.value);
  }

  function HandleSave() {
    if (deliveryEdit) {
      dispatch(
        updateRequest({
          id: deliveryEdit.id,
          recipient_id: recipient,
          deliveryman_id: deliverymen,
          product,
        })
      );
    } else {
      dispatch(
        createRequest({
          recipient_id: recipient,
          deliveryman_id: deliverymen,
          product,
        })
      );
    }
  }

  return (
    <Container>
      <Form onSubmit={HandleSave}>
        <div>
          <header>
            <h2>{title}</h2>
            <div>
              <Back type="button" onClick={HandleNavigateBack}>
                <MdChevronLeft size={28} />
                VOLTAR
              </Back>
              <Button type="button" onClick={HandleSave}>
                <MdCheck size={28} />
                SALVAR
              </Button>
            </div>
          </header>
          <div>
            <div>
              <BoxSelect>
                <span>Destinatário</span>
                <Select
                  value={recipients.filter(({ value }) => value === recipient)}
                  options={recipients}
                  placeholder="Selecione..."
                  onChange={HandleChangeRecipient}
                />
              </BoxSelect>
              <BoxSelect>
                <span>Entregador</span>
                <Select
                  value={deliveryman.filter(
                    ({ value }) => value === deliverymen
                  )}
                  options={deliveryman}
                  placeholder="Selecione..."
                  onChange={HandleChangeDeliverymen}
                />
              </BoxSelect>
            </div>
            <div>
              <BoxInput>
                <span>Nome do produto</span>
                <Input
                  name="name"
                  placeholder="Digite aqui o nome do produto"
                  value={product}
                  onChange={e => setProduct(e.target.value)}
                />
              </BoxInput>
            </div>
          </div>
        </div>
      </Form>
    </Container>
  );
}
