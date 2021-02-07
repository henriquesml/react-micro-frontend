import React, { useState } from "react"

function App({ name }) {
  const [counter, setCounter] = useState(0)

  const handleChangeConter = type => {
    setCounter(counter => counter + type)
  }

  return (
    <>
      <h1>{name}</h1>
      <h3>Contador: { counter }</h3>
      <button onClick={ () => handleChangeConter(-1) }>Menos</button>
      <button onClick={ () => handleChangeConter(1) }>Mais</button>
    </>
  )
}

export default App
