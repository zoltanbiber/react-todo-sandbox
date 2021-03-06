import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  todoItems: [{id: 1, content: "First todo item."}],
  isInProgress: false,
};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;