class TodoList {
  elements = {
    newTodoInput: () => cy.get('#new-todo-input'),
    addTodoButton: () => cy.get('#add-todo-button'),
    todoList: () => cy.get('#todo-list'),
  }

  typeNewTodo(text) {
    if (!text) return
    this.elements.newTodoInput().type(text)
  }
}

export const todoList = new TodoList()
