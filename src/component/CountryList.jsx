import React from 'react'
import Card from './Card'

const CountryList = ({user}) => {
  return (
    <div className=' d-flex justify-content-between flex-wrap' >
        {
            user.map((data,idx)=>{
                return(
               <div>
                  
                   <Card data={data} key={idx} style={{animationDelay:`${idx * 0.1}s`}}/>
               </div>
                )
            })
        }
    </div>
  )
}

export default CountryList