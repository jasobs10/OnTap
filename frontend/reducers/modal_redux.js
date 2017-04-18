//Modal Action Creator

const RECEIVE_COMPONENT = "RECEIVE_COMPONENT";
const ACTIVATE_MODAL = "ACTIVATE_MODAL";

export const receiveComponent = (component) => {
  return {
    type: RECEIVE_COMPONENT,
    component
  };
};

export const activateModal = (bool) => {
  return {
    type: ACTIVATE_MODAL,
    active: bool
  };
};

const _defaultModalState = {component: null, active: false};

export const modalReducer = (oldState = _defaultModalState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_COMPONENT:
      return Object.assign({}, oldState, {component: action.component});
    case ACTIVATE_MODAL:
      return Object.assign({}, oldState, {active: action.bool});
    default:
      return oldState;
  }
};
