import { useEffect } from 'react'

function Box() {
  useEffect(() => {
    console.log('Mount');
    return () => {
      console.log('Unmount');
    }
  }, []);

  return (
    <>Hello</>
  )
}

export default Box;