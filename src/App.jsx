import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([])

  function getTasks(){
    //Get the tasks from the api
    console.log('https://lanciweb.github.io/demo/api/actresses/');
    fetch('https://lanciweb.github.io/demo/api/actresses/')
  }
  

  return (
    <>
      <h1>ciao</h1>

      <button onClick={getTasks}>Get the tasks</button>

      <ul>
        {
          tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))
        }
      </ul>

          
          
    </>
  )
}

export default App
