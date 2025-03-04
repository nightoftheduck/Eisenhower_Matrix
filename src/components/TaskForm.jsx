"use client"

import { useState, useEffect } from "react"
import "./TaskForm.css"

const TaskForm = ({ onSubmit, onCancel, initialValues }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    quadrant: 1,
  })

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues)
    }
  }, [initialValues])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "quadrant" ? Number.parseInt(value, 10) : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title.trim()) return
    onSubmit(formData)
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{initialValues ? "Edit Task" : "Add New Task"}</h2>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description (optional)</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="quadrant">Quadrant</label>
        <select id="quadrant" name="quadrant" value={formData.quadrant} onChange={handleChange}>
          <option value={1}>Do First (Urgent & Important)</option>
          <option value={2}>Schedule (Important, Not Urgent)</option>
          <option value={3}>Delegate (Urgent, Not Important)</option>
          <option value={4}>Eliminate (Not Urgent, Not Important)</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="button" className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="submit-btn">
          {initialValues ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  )
}

export default TaskForm

