import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
  const [isTimerActive, setIsTimerActive] = useState(false)
  function toggleTimer() {
    setIsTimerActive(!isTimerActive)
  }
  function handleTimerDone() {
    setIsTimerActive(false)
  }
  return (
    <>
      <button onClick={toggleTimer}>
        { 
          isTimerActive 
            ? "Cancel Timer" 
            : "Start Timer"
        }
      </button>
      <div>
        {
          isTimerActive 
            ? <Timer onTimerDone={handleTimerDone}></Timer>
            : <div></div>
        }
      </div>
      
    </>
  )


}

export default App
