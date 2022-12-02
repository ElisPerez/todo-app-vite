import html from './app.html?raw'; //? raw: en crudo.
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs = {
  TodoList: '.todo-list'
}

/**
 * Punto inicial de la app
 * @param {String} elementId
 */
export const App = elementId => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    // console.log(todos);

    renderTodos(ElementIDs.TodoList, todos)
  };

  // Cuando la función App() se llama:
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);

    displayTodos();
  })();
};
