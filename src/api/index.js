import axios from 'axios'

const url = 'https://covid19.mathdro.id/api/';

export async function fetchData() {
  try {
  const {data} = await axios.get(url);
  console.log('response of normal api call is',data);
  return data;
  }
  catch(error) {
    return error;
  }

} 

export async function fetchDailyData() {
  try {
    const {data} =await axios.get(url+ "daily")
    console.log('response of daily api call is',data)
  }
  catch(error) {
    return error;
  }
  
}

export async function fetchCountries() {
   try {
     const {data} =await axios.get(url+ "countries")
     console.log('response of countries api call is',data)
     return data
  }
  catch(error) {
    return error;
  }

}

export async function fetchSpecificCountryData(selectedCountry) {
   try {
     console.log('selected country in fetchSpecificCountryData func is',selectedCountry)
     const {data} =await axios.get(url+ "countries/"+selectedCountry)
     console.log('response of countries api call is',data)
     return data
  }
  catch(error) {
    return error;
  }

}