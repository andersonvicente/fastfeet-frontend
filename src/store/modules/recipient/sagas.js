import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  removeSuccess,
  removeFailure,
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
    toast.error(
      err && err.response && err.response.data && err.response.data.error
        ? err.response.data.error
        : 'Falha ao cadastrar destinatário'
    );
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
    toast.error(
      err && err.response && err.response.data && err.response.data.error
        ? err.response.data.error
        : 'Falha ao atualizar destinatário'
    );
    yield put(updateFailure());
  }
}

export function* remove({ payload }) {
  try {
    const { id } = payload.data;

    yield call(api.delete, `recipients/${id}`);

    toast.success('Destinatário excluído com sucesso!');

    yield put(removeSuccess());
  } catch (err) {
    toast.error(
      err && err.response && err.response.data && err.response.data.error
        ? err.response.data.error
        : 'Falha ao excluir destinatário'
    );
    yield put(removeFailure());
  }
}

export default all([
  takeLatest('@recipient/CREATE_REQUEST', create),
  takeLatest('@recipient/UPDATE_REQUEST', update),
  takeLatest('@recipient/REMOVE_REQUEST', remove),
]);
