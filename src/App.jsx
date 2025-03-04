"use client"

import { useState, useEffect } from "react"
import "./App.css"
import TaskForm from "./components/TaskForm"
import Matrix from "./components/Matrix"

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("eisenhowerTasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  useEffect(() => {
    localStorage.setItem("eisenhowerTasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
  }

  const openEditForm = (task) => {
    setEditingTask(task)
    setIsFormOpen(true)
  }

  const moveTask = (id, newQuadrant) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, quadrant: newQuadrant } : task)))
  }

  return (
    <div className="app">
      <header>
        <h1>Eisenhower Matrix</h1>
        <button
          className="add-task-btn"
          onClick={() => {
            setEditingTask(null)
            setIsFormOpen(true)
          }}
        >
          Add Task
        </button>
      </header>

      <Matrix tasks={tasks} onDelete={deleteTask} onEdit={openEditForm} onMove={moveTask} />

      {isFormOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <TaskForm
              onSubmit={(task) => {
                if (editingTask) {
                  updateTask({ ...task, id: editingTask.id })
                } else {
                  addTask(task)
                }
                setIsFormOpen(false)
              }}
              onCancel={() => setIsFormOpen(false)}
              initialValues={editingTask}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App

