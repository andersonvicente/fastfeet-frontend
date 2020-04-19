export function createRequest(data) {
  return {
    type: '@delivery/CREATE_REQUEST',
    payload: { data },
  };
}

export function createSuccess(delivery) {
  return {
    type: '@delivery/CREATE_SUCCESS',
    payload: { delivery },
  };
}

export function createFailure() {
  return {
    type: '@delivery/CREATE_FAILURE',
  };
}

export function updateRequest(data) {
  return {
    type: '@delivery/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateSuccess(delivery) {
  return {
    type: '@delivery/UPDATE_SUCCESS',
    payload: { delivery },
  };
}

export function updateFailure() {
  return {
    type: '@delivery/UPDATE_FAILURE',
  };
}

export function removeRequest(data) {
  return {
    type: '@delivery/REMOVE_REQUEST',
    payload: { data },
  };
}

export function removeSuccess() {
  return {
    type: '@delivery/REMOVE_SUCCESS',
  };
}

export function removeFailure() {
  return {
    type: '@delivery/REMOVE_FAILURE',
  };
}
