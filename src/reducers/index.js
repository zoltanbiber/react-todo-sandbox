import { ADD_TODO, SAVE_TODO, CANCEL_TODO, TOGGLE_COMPLETED } from '../actions';

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        isInProgress: true};
    case SAVE_TODO:
      return state;
    case CANCEL_TODO:
      return state;
    case TOGGLE_COMPLETED:
      return state;
    default: return state;
  }
};

export default rootReducer;