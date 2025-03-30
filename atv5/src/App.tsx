import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([
    'Animal Crossing',
    'Prey',
    'Doom Eternal',
    'Miami Hotline'
  ]);
  const [input, setInput] = useState('');

  const filteredData = useMemo(() => {
    return data.filter(v => v.toLowerCase().includes(input.toLowerCase()))
  }, [data, input]);

  return (
    <>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>

      <div>
        { 
          filteredData.map((v, i) => (
            <div key={i}>{v}</div>
          ))
        }
      </div>
    </>
  )
}

export default App
