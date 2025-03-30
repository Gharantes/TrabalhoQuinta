import { useEffect, useMemo, useState } from "react"
import { OuterApiResponse } from "../types/ApiResponse";
import axios from "axios";
import './PageHome.css'

function PageHome() {

  const [apiData, setApiData] = useState<OuterApiResponse>({amiibo: []})
  function getApiData(){
    axios.get('https://www.amiiboapi.com/api/amiibo/').then((response) => {
      setApiData(response.data)
    }).catch((error) => console.log(error))
  }
  useEffect(() => {
    getApiData();
  }, []);

  const [input, setInput] = useState('');
  const filteredData = useMemo(() => {
    return apiData.amiibo.filter(v => v.gameSeries.toLowerCase().includes(input.toLowerCase()))
  }, [apiData, input]);

  return (
    <div className="page-home-container">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      
      <div className="games-container">
        {filteredData.map((v, index) => (
          <div key={index}>{v.character} - {v.gameSeries}</div>
        ))}
      </div>
    </div>
  )
}
  
export default PageHome