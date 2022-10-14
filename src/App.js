import React, { useState } from 'react'

const Thedeepsub = () => {
  return <>Thedeepsub</>
}



const Deepsub = () => {
  return <Thedeepsub />
}

const Sub = () => {
  return <>
    <Deepsub />
    sub
  </>
}

const App = () => {
  const [state, setState] = useState("혜림");

  return (
    <Sub />
  )
}

export default App