import "./Task.css"

const Task = ({ task, onDelete, onEdit, isDropdownOpen, onDropdownToggle, onMove, currentQuadrant }) => {
  const quadrantOptions = [
    { id: 1, name: "Do First" },
    { id: 2, name: "Schedule" },
    { id: 3, name: "Delegate" },
    { id: 4, name: "Eliminate" },
  ].filter((q) => q.id !== currentQuadrant)

  return (
    <div className="task">
      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
      </div>
      <div className="task-actions">
        <button className="edit-btn" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
        <div className="move-dropdown">
          <button className="move-btn" onClick={onDropdownToggle}>
            Move
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              {quadrantOptions.map((option) => (
                <button key={option.id} onClick={() => onMove(task.id, option.id)}>
                  {option.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Task

