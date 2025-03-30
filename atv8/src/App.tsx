import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  
  const [isTimerActive, setIsTimerActive] = useState(true);
  const timerRef = useRef<number | undefined>(undefined);
  const [timer, setTimer] = useState(0);

  const divRef = useRef<HTMLButtonElement>(null); // Create a ref for the name input

  useEffect(() => {
    setButtonText();

    if (isTimerActive) {
      clear()
      timerRef.current = setInterval(() => {
        incrementTimer();
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  }, [isTimerActive]);

  function clear() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }
  function incrementTimer() {
    setTimer((prev) => {
      return prev+1;
    })
  }
  function setButtonText() {
    if (divRef.current) {
      if (isTimerActive) {
        divRef.current.textContent = "Pausar"
      } else {
        divRef.current.textContent = "Retomar"
      }
    }
  }
  function toggleTimer() {
    setIsTimerActive(!isTimerActive);
  }


  return (
    <>
      <div>{ timer }</div>
      <button ref={divRef} onClick={toggleTimer}></button>
    </>
  )
}

export default App
