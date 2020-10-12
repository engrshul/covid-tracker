import React, { useEffect, useState } from "react";
import styles from './App.module.css';
import { Cards,Chart,CountryPicker} from './components/index'
import {fetchData,fetchDailyData,fetchCountries} from './api/index'

function App() {

  const [apiData, setApiData] = useState({})
  const [currentCountry,setCurrentCountry] = useState("india")

  function handleCountryChange(country) {
  console.log('going to set country as ',country)  
  setCurrentCountry(country)
}
  
  useEffect(() => {
  async function fetchMyApi() {  
  const data = await fetchData()
  console.log('api data in use effect is',data)
  setApiData({data}) 
  }
  fetchMyApi();
  }, [])

  
  return (
    <div className={styles.app}>
      { console.log('indi retutn',{apiData})}
      <Cards bulk = {apiData}/>
      <CountryPicker handleCountryChange= {handleCountryChange}/>
      <Chart selectedCountry= {currentCountry}/>
    </div>
  );
}

export default App;
