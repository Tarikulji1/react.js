import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "tarikul",
    age: 22
  }

  let newArr = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Css</h1>
      <Card username="chaaiaurcode" someObj={newArr} btnText="Click Me" />
      <Card username="tarikul" btnText="Visit Me"/>
    </>
  )
}

export default App
