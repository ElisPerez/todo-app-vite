import { Todo } from '../models/todo.model';
import { createTodoHTML } from './';

let element;

/**
 * @param {String} elementId - The id of the element to render the todos in.
 * @param {Todo} todos - an array of todo objects
 */
export const renderTodos = (elementId, todos = []) => {
  // todo: referencia
  if (!element) {
    element = document.querySelector(elementId);
  }

  if (!element) {
    throw new Error(`Element ${elementId} not found`);
  }

  element.innerHTML = '';

  todos.forEach(todo => {
    element.append(createTodoHTML(todo));
  });
};
