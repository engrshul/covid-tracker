import {fetchSpecificCountryData} from '../../api/index'
import React, { useEffect,useState } from "react";
import {Bar} from 'react-chartjs-2';
import styles from './Chart.module.css'

function Chart(props) {

 
  const [countrySpecificData, setCountrySpecificData] = useState({})

  console.log('going to render charts component as country has been changed',props.selectedCountry)
  useEffect(() => {
    async function fetchMyApi() {
    const countryData= await fetchSpecificCountryData(props.selectedCountry)
    console.log('country specific data is',countryData)
    setCountrySpecificData(countryData)
    }
    fetchMyApi()
  }, [props.selectedCountry])

  let {confirmed,recovered,deaths}= countrySpecificData;

  if (!props.selectedCountry || !confirmed) {
    return 'Loading...';
  }

  
  console.log('confirmed object is',confirmed.value)
  console.log('recovered object is',recovered.value)
  console.log('deaths object is',deaths.value)

  const data = {
  labels: ['Infected', 'Recovered', 'Deaths'],
  datasets: [
    {
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [confirmed.value,recovered.value,deaths.value],
    }
  ]
};

  return (
    <div className = {styles.container}>
        <Bar
          data={data}
          height='300'
         
          options={{
            maintainAspectRatio: false,
            responsive : true
          }}
        />
    </div>
  )
}

export default Chart
