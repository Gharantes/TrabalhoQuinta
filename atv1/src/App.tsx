import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <div className='display'>{count}</div>
        
        <div className='btn-line'>
          <button onClick={() => setCount((count) => count - 1)}>
            Decrementar
          </button>

          <button onClick={() => setCount((count) => count + 1)}>
            Incrementar
          </button>
        </div>
      </div>
    </>
  )
}

export default App
