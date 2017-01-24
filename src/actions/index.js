export const SHOW_NEW_TASK_INPUT = 'SHOW_NEW_TASK_INPUT';
export const HIDE_NEW_TASK_INPUT = 'HIDE_NEW_TASK_INPUT';
export const SAVE_TODO = 'SAVE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';


export const showNewTaskInput = () => ({
  type: SHOW_NEW_TASK_INPUT,
});

export const hideNewTaskInput = () => ({
  type: HIDE_NEW_TASK_INPUT,
});

export const saveTodo = (todo) => ({
  type: SAVE_TODO,
  todo: todo
});