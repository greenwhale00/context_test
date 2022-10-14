import React, { useContext, useState } from 'react';
import { createContext } from 'react'
const Babo = createContext();

// 1. createContext로 Context를 만든다.
// 2. 이름.Provider 로 하위구조를 감싼다.
// 3. value값을 지정한다.
// 4. useContext(이름)으로 불러온다.


const Thedeepsub = () => {
  const { state, setState } = useContext(Babo); //provider 비구조 할당
  return <>
    혜림 {state}
    <button onClick={
      () => setState('천재')
    }>천재로 만들기</button>
  </>
}

const Deepsub = () => {
  return <Thedeepsub />
}

const Sub = () => {
  return <Deepsub />
}

const App = () => {
  const [state, setState] = useState("바보");

  return (
    <Babo.Provider value={{ state, setState }}>
      <Sub />
    </Babo.Provider>
  )
}

export default App