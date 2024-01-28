import React from "react"
import Box from "./components/Box"

function App() {

  return (
    <>
      <Box heading="Hello there, I am heading of the Box" count={2000} func={() => alert("Hello, a triggered function")} />
    </>
  )
}

export default App
