export const ADD_TODO = 'ADD_TODO';
export const SAVE_TODO = 'SAVE_TODO';
export const CANCEL_TODO = 'CANCEL_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

let nextTodoId = 1;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});