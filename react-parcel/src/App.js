import React, { useState } from 'react'

function App({ name }) {
  const [tasks, setTasks] =  useState([])

  return (
    <>
      <h1>{name}</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Task</th>
        </tr>
      </table>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.describe}</td>
          </tr>
        ))}
      </tbody>
    </>
  )
}

export default App
