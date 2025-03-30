import { useEffect, useState } from "react"

function Page2() {

  const [timer, setTimer] = useState(0);
  
  useEffect(() => {
    const intervalRef = setInterval(() => {
      setTimer((x) => x+1);
    }, 1000);

    return () => clearInterval(intervalRef); 
  }, [])

    return (
      <>
        Página 2 - Contador: { timer }
      </>
    )
  }
  
  export default Page2