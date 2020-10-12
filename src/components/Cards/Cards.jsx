import CardComponent from './Card/Card.jsx'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './Cards.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Cards({bulk}) {  
 
  console.log("bulk is........",bulk.data)
   if (!bulk.data) {
    return 'Loading...';
  }

  const {confirmed} = bulk.data
  console.log('confirmed is..',confirmed)
  return (
    <div className = {styles.container} >
      <Grid container spacing={3}>
          <CardComponent className = {styles.infected}
          cardTitle= 'Infected'
          value = {bulk.data.confirmed.value}
          updatedAt = { bulk.data.lastUpdate}
          cardSubtitle = 'No of infected cases from covid 19'
          />
          
          <CardComponent className = {styles.recovered}
          cardTitle= "Recovered"
          value = {bulk.data.recovered.value}
          updatedAt = { bulk.data.lastUpdate}
          cardSubtitle = 'No of recovered cases from covid 19'
          />

          <CardComponent className = {styles.deaths}
          cardTitle= "Deaths"
          value = {bulk.data.deaths.value}
          updatedAt = { bulk.data.lastUpdate}
          cardSubtitle = 'No of deaths cases from covid 19'
          />
          
      </Grid>
    </div>
  )
}

export default Cards
