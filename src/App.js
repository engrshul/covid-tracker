import React, { useEffect, useState } from "react";
import './App.css';
import { Cards,Chart,CountryPicker} from './components/index'
import {fetchData,fetchDailyData,fetchCountries} from './api/index'

function App() {

  const [apiData, setApiData] = useState({})
  
  useEffect(() => {
  async function fetchMyApi() {  
  const data = await fetchData()
  console.log('api data in use effect is',data)
  setApiData({data}) 
  }
  fetchMyApi();
  }, [])

  
  return (
    <div className="App">
      { console.log('indi retutn',{apiData})}
      <Cards bulk = {apiData}/>
      <CountryPicker/>
      <Chart/>
    </div>
  );
}

export default App;
