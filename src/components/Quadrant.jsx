"use client"

import { useState } from "react"
import Task from "./Task"
import "./Quadrant.css"

const Quadrant = ({ id, title, subtitle, tasks, onDelete, onEdit, onMove }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({})

  const handleDropdownToggle = (taskId) => {
    setIsDropdownOpen({
      ...isDropdownOpen,
      [taskId]: !isDropdownOpen[taskId],
    })
  }

  const handleMoveTask = (taskId, newQuadrant) => {
    onMove(taskId, newQuadrant)
    setIsDropdownOpen({
      ...isDropdownOpen,
      [taskId]: false,
    })
  }

  return (
    <div className={`quadrant quadrant-${id}`}>
      <div className="quadrant-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="tasks-container">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks</p>
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
              isDropdownOpen={isDropdownOpen[task.id] || false}
              onDropdownToggle={() => handleDropdownToggle(task.id)}
              onMove={handleMoveTask}
              currentQuadrant={id}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Quadrant

