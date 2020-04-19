export function createRequest(data) {
  return {
    type: '@deliveryman/CREATE_REQUEST',
    payload: { data },
  };
}

export function createSuccess(delivery) {
  return {
    type: '@deliveryman/CREATE_SUCCESS',
    payload: { delivery },
  };
}

export function createFailure() {
  return {
    type: '@deliveryman/CREATE_FAILURE',
  };
}

export function updateRequest(data) {
  return {
    type: '@deliveryman/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateSuccess(delivery) {
  return {
    type: '@deliveryman/UPDATE_SUCCESS',
    payload: { delivery },
  };
}

export function updateFailure() {
  return {
    type: '@deliveryman/UPDATE_FAILURE',
  };
}

export function removeRequest(data) {
  return {
    type: '@deliveryman/REMOVE_REQUEST',
    payload: { data },
  };
}

export function removeSuccess() {
  return {
    type: '@deliveryman/REMOVE_SUCCESS',
  };
}

export function removeFailure() {
  return {
    type: '@deliveryman/REMOVE_FAILURE',
  };
}
