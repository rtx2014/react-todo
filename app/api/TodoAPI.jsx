var $ = require('jquery');

module.exports = {
  setTodos(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    };

    return $.isArray(todos) ? todos : [];
  },
  filterTodos(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    if (searchText.length > 0) {
      filteredTodos = filteredTodos.filter((todo) => {
        return todo.text.toLowerCase().indexOf(searchText) >= 0;
      });
    }

    return filteredTodos;
  }
};
