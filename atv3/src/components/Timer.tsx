import { useEffect, useState } from 'react'

function Timer({ onTimerDone }: { onTimerDone: () => void; }) {
    const [timer, setTimer] = useState(10)
    
    useEffect(() => {
        if (timer === 0) { 
            onTimerDone();
            return;
         }

        const intervalRef = setInterval(() => {
            setTimer((prevValue) => {
                const newValue = prevValue - 1;
                if (newValue == 0) { clearInterval(intervalRef) }
                console.log(newValue);
                return newValue;
            });
        }, 1000);

        return () => clearInterval(intervalRef);
    }, [timer, onTimerDone]);

  return (
    <>
        { timer }
    </>
  )
}

export default Timer
