import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import UpdateTodo from './components/UpdateTodo'

function App() {
  

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <UpdateTodo />
      <Todos />
    </>
  )
}

export default App