import React, { useState, useEffect } from 'react'
import { listenEvent } from '@henriquesml/utils'

function App({ name }) {
  const [tasks, setTasks] =  useState([])

  useEffect(() => {
    listenEvent('@henriquesml/react-route/todo/add-task', event => {
      setTasks(tasks => [
        ...tasks,
        event.detail
      ])
    })
  }, [])

  return (
    <>
      <h1>@henriquesml/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
