import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { cancelDeliverySuccess, cancelDeliveryFailure } from './actions';

export function* cancelDelivery({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.delete, `problem/${id}/cancel-delivery`);

    const problem = response.data;

    toast.success('A encomenda foi cancelada com sucesso!');

    yield put(cancelDeliverySuccess(problem));
  } catch (err) {
    toast.error(
      err && err.response && err.response.data && err.response.data.error
        ? err.response.data.error
        : 'Falha ao cancelar encomenda'
    );
    yield put(cancelDeliveryFailure());
  }
}

export default all([
  takeLatest('@problem/CANCEL_DELIVERY_REQUEST', cancelDelivery),
]);
