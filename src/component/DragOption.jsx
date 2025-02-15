import React, { useEffect } from 'react'

 export const DragOption = ({onSelect}) => {
 const contitents=[
  {id:1,name:"Africa"},
  {id:2,name:"Antarctica"},
  {id:3,name:"Asia"},
  {id:4,name:"Europe"},
  {id:5,name:"South America"},
  {id:6,name:"Oceania"},
  {id:7,name:"South America"},

 ]
 const selecthandel=(e)=>{
  const regionName=e.target.value;
  onSelect(regionName)
  
 }
  return (
    <div>
    <select className='m-2' onChange={selecthandel} >
      {
        contitents.map(country=><option value={country.name} key={country.id} >{country.name}</option>)
      }
      </select> 
</div>
  )
}

