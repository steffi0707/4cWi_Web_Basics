import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='bg-amber-300 border'>Hello</h1>
      <Card />
      test
    </>
  );
}

export default App;
