import { useEffect, useRef } from 'react';
import './App.css'

function App() {

  const nameInputRef = useRef<HTMLInputElement>(null); // Create a ref for the name input
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [])

  return (
    <>
      <div>
        <label htmlFor="name">Nome</label>
        <input ref={nameInputRef} name='name' type="text" />
      </div>
      
      <div>
        <label htmlFor="email">E-mail</label>
        <input name='email' type="text" />
      </div>

      <button>Enviar</button>
    </>
  )
}

export default App
