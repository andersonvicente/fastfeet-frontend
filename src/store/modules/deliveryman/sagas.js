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
  removeFailure
} from './actions';

export function* create({ payload }) {
  try {
    const { avatar_id, name, email } = payload.data;

    const response = yield call(api.post, 'deliverymen', {
      avatar_id,
      name,
      email,
    });

    const deliveryman = response.data;

    toast.success('Entregador cadastrado com sucesso!');

    yield put(createSuccess(deliveryman));

    history.push('/deliveryman');
  } catch (err) {
    toast.error(err && err.response && err.response.data && err.response.data.error ? err.response.data.error :  'Falha ao cadastrar entregador');
    yield put(createFailure());
  }
}

export function* update({ payload }) {
  try {
    const { id, avatar_id, name, email } = payload.data;

    const response = yield call(api.put, `deliverymen/${id}`, {
      avatar_id,
      name,
      email,
    });

    const deliveryman = response.data;

    toast.success('Entregador atualizado com sucesso!');

    yield put(updateSuccess(deliveryman));

    history.push('/deliveryman');
  } catch (err) {
    toast.error(err && err.response && err.response.data && err.response.data.error ? err.response.data.error :  'Falha ao atualizar entregador');
    yield put(updateFailure());
  }
}

export function* remove({ payload }) {
  try {
    const { id } = payload.data;

    yield call(api.delete, `deliverymen/${id}`);

    toast.success('Entregador excluído com sucesso!');

    yield put(removeSuccess());

    history.push('/deliveryman');
  } catch (err) {
    toast.error(err && err.response && err.response.data && err.response.data.error ? err.response.data.error :  'Falha ao excluir entregador');
    yield put(removeFailure());
  }
}


export default all([
  takeLatest('@deliveryman/CREATE_REQUEST', create),
  takeLatest('@deliveryman/UPDATE_REQUEST', update),
  takeLatest('@deliveryman/REMOVE_REQUEST', remove)
]);
