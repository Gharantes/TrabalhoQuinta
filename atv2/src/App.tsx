import { useState } from 'react'
import './App.css'

function App() {
  const [newTask, setNewTask] = useState('')

  const [listOfTasks, setListOfTasks] = useState<string[]>([]) 
  return (
    <>
      <div>
        <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} /> 
        <button onClick={addNewTask}>Adicionar</button>
      </div>

      <div>
        { listOfTasks.map((task, index) => (
          <p key={index}>{task}</p>
        )) }
      </div>
    </>
  )

  function addNewTask(): undefined {
    if (newTask == '') {
      return;
    }
    setListOfTasks((list) => {
      const arr = [...list, newTask];
      setNewTask('');
      return arr;
    });
  }
}

export default App
