import { Todo } from '../todos/models/todo.model';

const Filters = {
  All: 'all',
  Completed: 'completed',
  Pending: 'pending',
};

const state = {
  todos: [
    new Todo('Piedra del alma'),
    new Todo('Piedra del infinito'),
    new Todo('Piedra del tiempo'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('initStore 🥑');
};

const loadStore = () => {
  throw new Error('Not inplemented');
};

const getTodos = (filter = Filters.All) => {
  
};

/**
 * Add new ToDo
 * @param {String} description
 */
const addTodo = description => {
  throw new Error('Not inplemented');
};

/**
 * Hacer toggle a la propiedad "this.done"
 * Pending: false, Completed: true.
 * @param todoId - The id of the todo to toggle
 */
const toggleTodo = todoId => {
  throw new Error('Not inplemented');
};

const deleteTodo = todoId => {
  throw new Error('Not inplemented');
};

const deleteCompleted = () => {
  throw new Error('Not inplemented');
};

const setFilter = (newFilter = Filters.All) => {
  throw new Error('Not inplemented');
};

const getCurrentFilter = () => {
  throw new Error('Not inplemented');
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
