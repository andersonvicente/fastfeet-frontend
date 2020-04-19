import produce from 'immer';

const INITIAL_STATE = {
  reload: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveryman/REMOVE_SUCCESS': {
        draft.reload = new Date();
        break;
      }
      default:
    }
  });
}
