export function cancelDeliveryRequest(data) {
  return {
    type: '@problem/CANCEL_DELIVERY_REQUEST',
    payload: { data },
  };
}

export function cancelDeliverySuccess() {
  return {
    type: '@problem/CANCEL_DELIVERY_SUCCESS',
  };
}

export function cancelDeliveryFailure() {
  return {
    type: '@problem/CANCEL_DELIVERY_FAILURE',
  };
}
