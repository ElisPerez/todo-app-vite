import { Todo } from '../todos/models/todo.model';

const Filters = {
  All: 'all',
  Completed: 'completed',
  Pending: 'pending',
};

const state = {
  todos: [
    new Todo('Piedra del alma'),
    new Todo('Piedra del espacio'),
    new Todo('Piedra del tiempo'),
    new Todo('Piedra del poder'),
    new Todo('Piedra de la mente'),
    new Todo('Piedra de la realidad'),
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
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.Completed:
      return state.todos.filter(todo => todo.done); // Retorna nuevo arreglo con los To-Dos completados

    case Filters.Pending:
      return state.todos.filter(todo => !todo.done); // Retorna nuevo arreglo con los To-Dos pendientes

    default:
      throw new Error(`Option ${filter} is not valid`);
  }
};

/**
 * Add new ToDo
 * @param {String} description
 */
const addTodo = description => {
  if (!description) {
    throw new Error('Description is required');
  }

  state.todos.push(new Todo(description));
};

/**
 * Hacer toggle a la propiedad "this.done"
 * Pending: false, Completed: true.
 * @param todoId - The id of the todo to toggle
 */
const toggleTodo = todoId => {
  state.todos = state.todos.map(todo => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
};

const deleteTodo = todoId => {
  if (!todoId) throw new Error('todoId es required');
  state.todos = state.todos.filter(todo => todo.id !== todoId);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter(todo => !todo.done); //todo: Fernando lo agregó sin el !
};

/**
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
