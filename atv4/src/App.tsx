import { useEffect, useState } from 'react'
import './App.css'
import { OuterApiResponse } from './types/ApiResponse'
import axios from 'axios'

function App() {
  const [apiData, setApiData] = useState<OuterApiResponse>({amiibo: []})
  
  function getApiData(){
    axios.get('https://www.amiiboapi.com/api/amiibo/').then((response) => {
      setApiData(response.data)
    }).catch((error) => console.log(error))
  }

  useEffect(() => {
    getApiData();
  }, [])


  return (
    <>
      { apiData.amiibo.map((v, index) => (
        <div key={index}>{v.name} - {v.gameSeries}</div>
      ))}
    </>
  )
}

export default App
