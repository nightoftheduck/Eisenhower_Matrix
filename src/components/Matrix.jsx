import Quadrant from "./Quadrant"
import "./Matrix.css"

const Matrix = ({ tasks, onDelete, onEdit, onMove }) => {
  const quadrants = [
    { id: 1, title: "Do First", subtitle: "Urgent & Important" },
    { id: 2, title: "Schedule", subtitle: "Important, Not Urgent" },
    { id: 3, title: "Delegate", subtitle: "Urgent, Not Important" },
    { id: 4, title: "Eliminate", subtitle: "Not Urgent, Not Important" },
  ]

  return (
    <div className="matrix">
      {quadrants.map((quadrant) => (
        <Quadrant
          key={quadrant.id}
          id={quadrant.id}
          title={quadrant.title}
          subtitle={quadrant.subtitle}
          tasks={tasks.filter((task) => task.quadrant === quadrant.id)}
          onDelete={onDelete}
          onEdit={onEdit}
          onMove={onMove}
        />
      ))}
    </div>
  )
}

export default Matrix

