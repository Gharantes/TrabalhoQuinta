import { useEffect, useState } from "react";
import { OuterApiResponse } from "../types/ApiResponse";
import axios from "axios";

function Box() {
    const [apiData, setApiData] = useState<OuterApiResponse>({amiibo: []});
    const [browseType, setBrowseType] = useState('');

    function getApiData(){
        axios.get('https://www.amiiboapi.com/api/amiibo/').then((response) => {
            setApiData(response.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        if (!getFromLocalStorage()) {
            getApiData();
            setBrowseType('Buscou da API')
            localStorage.setItem('apiData', JSON.stringify(apiData));
        }
        
        return localStorage.removeItem('apiData');
    }, []);

    function getFromLocalStorage() {
        const json = localStorage.getItem('apiData')
        if (json) {
            setApiData(JSON.parse(json));
            setBrowseType('Buscou do Local Storage')
            return true;
        } 
        return false;
    }
    return (
        <>
            { browseType }

            <br/><br/><br/>

            {
                apiData.amiibo.map((v, index) => (
                    <div key={index}>{v.gameSeries}</div>
                ))
            }
        </>
    );
}

export default Box;