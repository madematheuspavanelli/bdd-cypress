Feature: TodoList

  Scenario: Add a new todo item
    Given I visit the todo list
    When I enter "Buy milk" in the new todo input
    And I press the enter key
    Then I should see the todo item "Buy milk"
    Then I should see the input empty
  
  # Scenario: Remove a todo item
  #   Given I visit the todo list
  #   When I enter "Buy milk" in the new todo input
  #   And I click the add button
  #   Then I should see the todo item "Buy milk"
  #   When I click in the remove button at the todo item "Buy milk"
  #   Then I should not see the todo item "Buy milk"

  # Scenario: Add an empty todo item
  #   Given I visit the todo list
  #   When I enter "" in the new todo input
  #   And I press the enter key
  #   Then I should not see the todo item ""
