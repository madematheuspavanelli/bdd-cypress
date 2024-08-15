import '@/styles/global.css'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  function handleAddTodo(event: React.FormEvent) {
    event.preventDefault()
    const value = newTodo.trim()
    if (!value) {
      return
    }
    setTodos([...todos, value])
    setNewTodo('')
  }

  return (
    <div className="h-full max-h-screen">
      <div className="mx-auto mt-8 max-w-sm">
        <form className="flex gap-4">
          <Input
            placeholder="Your big idea..."
            id="new-todo-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button type="submit" onClick={handleAddTodo}>
            Add
          </Button>
        </form>

        <ul className="mt-8" id="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="rounded border border-stone-200 p-2">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
