import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  todoItems: [{id: 1, content: "First todo item."}],
  isInProgress: false,
  input: '',
  done: false,
  strikethrough: false
};

const store = createStore(rootReducer, initialState);

export default store;