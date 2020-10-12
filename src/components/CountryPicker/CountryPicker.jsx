import React, { useEffect,useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import {fetchCountries} from '../../api/index.js'
import styles from './CountryPicker.module.css'

function CountryPicker(props) {

  const [countries, setCountries] = useState([])

  useEffect(() => {
  async function fetchMyApi() {  
  const  responseObj = await fetchCountries()
  if(responseObj) {
  let {countries} = responseObj;
  console.log('countries array in useeffect response is',countries)
  let countryNames=countries.map((country) => country.name)
  console.log('countryNames are',countryNames)
  setCountries(countryNames)
  }}
  fetchMyApi();
  }, [])

  return (
     <FormControl className = {styles.container}>   
        <NativeSelect
          defaultValue=""
          onChange={(e) => props.handleCountryChange(e.target.value)}
        >
           <option value="india">India</option>
           {countries.map((country, i) =>{ if(country != 'India') return (<option key={i} value={country}>{country}</option>)})} 
        </NativeSelect>
      </FormControl>
  )
}

export default CountryPicker
