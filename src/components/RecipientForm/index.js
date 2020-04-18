import React from 'react';
import { useDispatch } from 'react-redux';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { Form } from '@rocketseat/unform';
import { Back, Button } from '~/styles/form';
import history from '~/services/history';

import {
  createRequest,
  updateRequest,
} from '~/store/modules/recipient/actions';

import {
  Container,
  InputName,
  InputAddressStreet,
  InputAddressNumber,
  InputAddressComplement,
  InputCity,
  InputState,
  InputZipCode,
} from './styles';

export default function Create({ data }) {
  const recipient = data
    ? data.recipient
    : {
        id: null,
        name: '',
        email: '',
        address_street: '',
        address_number: '',
        address_complement: '',
        city: '',
        state: '',
        zip_code: '',
      };

  const dispatch = useDispatch();

  function HandleNavigateBack() {
    history.goBack();
  }

  function HandleSubmit(data) {
    const {
      name,
      address_street,
      address_number,
      address_complement,
      city,
      state,
      zip_code,
    } = data;

    if (recipient.id) {
      dispatch(
        updateRequest({
          id: recipient.id,
          name,
          address_street,
          address_number,
          address_complement,
          city,
          state,
          zip_code,
        })
      );
    } else {
      dispatch(
        createRequest({
          name,
          address_street,
          address_number,
          address_complement,
          city,
          state,
          zip_code,
        })
      );
    }
  }

  return (
    <Container>
      <Form initialData={recipient} onSubmit={HandleSubmit}>
        <div>
          <header>
            <h2>
              {recipient.id
                ? 'Edição de destinatário'
                : 'Cadastro de destinatário'}
            </h2>
            <div>
              <Back type="button" onClick={HandleNavigateBack}>
                <MdChevronLeft size={28} />
                VOLTAR
              </Back>
              <Button type="submit">
                <MdCheck size={28} />
                SALVAR
              </Button>
            </div>
          </header>
          <div>
            <div>
              <p>
                Nome
                <InputName name="name" placeholder="Nome completo" />
              </p>
              <p>
                Rua
                <InputAddressStreet
                  name="address_street"
                  placeholder="Rua... Avenida... Alameda..."
                />
              </p>
              <p>
                Número
                <InputAddressNumber name="address_number" placeholder="" />
              </p>
              <p>
                Complemento
                <InputAddressComplement
                  name="address_complement"
                  placeholder=""
                />
              </p>
              <p>
                Cidade
                <InputCity name="city" placeholder="A cidade do destinatário" />
              </p>
              <p>
                Estado
                <InputState name="state" placeholder="O nome do estado" />
              </p>
              <p>
                Estado
                <InputZipCode name="zip_code" placeholder="00000-000" />
              </p>
            </div>
          </div>
        </div>
      </Form>
    </Container>
  );
}
