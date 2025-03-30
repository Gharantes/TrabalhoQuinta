import { useMemo, useState } from 'react'
import './App.css'

export enum EquationType {
  SUM,
  MINUS,
  DIVISION,
  TIMES
}

function App() {
  const [input1, setInput1] = useState<number | undefined>(undefined);
  const [input2, setInput2] = useState<number | undefined>(undefined);
  const [equationType, setEquationType] = useState<EquationType | undefined>(undefined);

  function setInput(
    setter: React.Dispatch<React.SetStateAction<number | undefined>>,
    value: string
  ) {
    if (value.trim() == '') {
      setter(undefined);
    } else if (Number.isNaN(Number(value))) {
      setter(undefined)
    } else {
      setter(Number(value));
    }
  }

  const result = useMemo(() => {
    switch (equationType) {
      case EquationType.SUM: { return (input1 ?? 0) + (input2 ?? 0); }
      case EquationType.MINUS: { return (input1 ?? 0) - (input2 ?? 0); }
      case EquationType.DIVISION: { return (input1 ?? 0) / (input2 ?? 0); }
      case EquationType.TIMES: { return (input1 ?? 0) * (input2 ?? 0); }
      default: { return input1 ?? 0; }
    }
  }, [input1, input2, equationType])

  return (
    <>
      <div>
        Resultado: { result }
      </div>

      <input type="number" value={input1} onChange={(e) => setInput(setInput1, e.target.value)}/>
      <input type="number" value={input2} onChange={(e) => setInput(setInput2, e.target.value)}/>

      <div>
        <button onClick={() => setEquationType(EquationType.SUM)}>+</button>
        <button onClick={() => setEquationType(EquationType.MINUS)}>-</button>
        <button onClick={() => setEquationType(EquationType.DIVISION)}>/</button>
        <button onClick={() => setEquationType(EquationType.TIMES)}>*</button>
      </div>

    </>
  )
}

export default App
