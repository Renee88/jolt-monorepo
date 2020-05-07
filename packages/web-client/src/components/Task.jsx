import React from 'react'

const Task = ({task}) => {
  return (
    <div>
      <p>{task.type}</p>
      <p> {task.title} </p>
    </div>
  )
}

export default Task