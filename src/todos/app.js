import html from './app.html?raw'; //? raw: en crudo.

/**
 * Punto inicial de la app
 * @param {String} elementId
 */
export const App = elementId => {
  // Cuando la función App() se llama:
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();
};
