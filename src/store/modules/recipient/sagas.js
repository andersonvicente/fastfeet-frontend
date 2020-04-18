import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
} from './actions';

export function* create({ payload }) {
  try {
    const {
      name,
      address_street,
      address_number,
      address_complement,
      city,
      state,
      zip_code,
    } = payload.data;

    const response = yield call(api.post, 'recipients', {
      name,
      address_street,
      address_number,
      address_complement,
      city,
      state,
      zip_code,
    });

    const recipient = response.data;

    toast.success('Destinatário cadastrado com sucesso!');

    yield put(createSuccess(recipient));

    history.push('/recipient');
  } catch (err) {
    console.tron.log(err);
    toast.error('Falha ao cadastrar destinatário');
    yield put(createFailure());
  }
}

export function* update({ payload }) {
  try {
    const {
      id,
      name,
      address_street,
      address_number,
      address_complement,
      city,
      state,
      zip_code,
    } = payload.data;

    const response = yield call(api.put, `recipients/${id}`, {
      name,
      address_street,
      address_number,
      address_complement,
      city,
      state,
      zip_code,
    });

    const recipient = response.data;

    toast.success('Destinatário atualizado com sucesso!');

    yield put(updateSuccess(recipient));

    history.push('/recipient');
  } catch (err) {
    console.tron.log(err);
    toast.error('Falha ao atualizar destinatário');
    yield put(updateFailure());
  }
}

export default all([
  takeLatest('@recipient/CREATE_REQUEST', create),
  takeLatest('@recipient/UPDATE_REQUEST', update),
]);
