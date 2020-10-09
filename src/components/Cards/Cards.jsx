import React from 'react'
import Card from './Card/Card'

function Cards({bulk}) {  
 
  console.log("bulk is........",bulk.data)
   if (!bulk.data) {
    return 'Loading...';
  }

  const {confirmed} = bulk.data
  console.log('confirmed is..',confirmed)
  return (
    <div>
      <h1>here i gonna show all cards </h1>
    </div>
  )
}

export default Cards
