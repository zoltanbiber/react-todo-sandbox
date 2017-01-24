import { SHOW_NEW_TASK_INPUT, HIDE_NEW_TASK_INPUT, SAVE_TODO, TOGGLE_COMPLETED } from '../actions';

const rootReducer = (state, action) => {
  switch (action.type) {
    case SHOW_NEW_TASK_INPUT:
      return {
        ...state,
        isInProgress: true
      }
    case HIDE_NEW_TASK_INPUT:
      return {
        ...state,
        isInProgress: false
      };
    case SAVE_TODO:
      return state;
    case TOGGLE_COMPLETED:
      return state;
    default: return state;
  }
};

export default rootReducer;