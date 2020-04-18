export function createRequest(data) {
  return {
    type: '@recipient/CREATE_REQUEST',
    payload: { data },
  };
}

export function createSuccess(delivery) {
  return {
    type: '@recipient/CREATE_SUCCESS',
    payload: { delivery },
  };
}

export function createFailure() {
  return {
    type: '@recipient/CREATE_FAILURE',
  };
}

export function updateRequest(data) {
  return {
    type: '@recipient/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateSuccess(delivery) {
  return {
    type: '@recipient/UPDATE_SUCCESS',
    payload: { delivery },
  };
}

export function updateFailure() {
  return {
    type: '@recipient/UPDATE_FAILURE',
  };
}
