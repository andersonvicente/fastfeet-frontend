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
    const { recipient_id, deliveryman_id, product } = payload.data;

    const response = yield call(api.post, 'deliveries', {
      recipient_id,
      deliveryman_id,
      product,
    });

    const delivery = response.data;

    toast.success('Encomenda cadastrada com sucesso!');

    yield put(createSuccess(delivery));

    history.push('/delivery');
  } catch (err) {
    toast.error(err && err.response && err.response.data && err.response.data.error ? err.response.data.error :  'Falha ao cadastrar encomenda');
    yield put(createFailure());
  }
}

export function* update({ payload }) {
  try {
    const { id, recipient_id, deliveryman_id, product } = payload.data;

    const response = yield call(api.put, `deliveries/${id}`, {
      recipient_id,
      deliveryman_id,
      product,
    });

    const delivery = response.data;

    toast.success('Encomenda atualizada com sucesso!');

    yield put(updateSuccess(delivery));

    history.push('/delivery');
  } catch (err) {
    toast.error(err && err.response && err.response.data && err.response.data.error ? err.response.data.error :  'Falha ao atualizar encomenda');
    yield put(updateFailure());
  }
}

export default all([
  takeLatest('@delivery/CREATE_REQUEST', create),
  takeLatest('@delivery/UPDATE_REQUEST', update),
]);
