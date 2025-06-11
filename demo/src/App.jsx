import { useState } from 'react'
import TestUebungen from './components/TestUebungen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestUebungen/>
    </>
  )
}

export default App
