import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { todoList } from './todo-list.cy'

// Scenario: Add a new todo item
Given('I visit the todo list', () => {
  cy.visit('/')
})
When('I enter {string} in the new todo input', (text) => {
  todoList.typeNewTodo(text)
})
Then('I press the enter key', () => {
  todoList.elements.newTodoInput().type('{enter}')
})
Then('I should see the todo item {}', (text) => {
  todoList.elements.todoList().should('contain', text)
})
Then('Then I should see the input empty', () => {
  todoList.elements.newTodoInput().should('have.value', '')
})
