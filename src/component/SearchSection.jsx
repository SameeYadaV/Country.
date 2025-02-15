import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchSection = ({setsearch}) => {

  return (
    <div className="input-group w-25 m-4 fs-1 ">
  <span className="input-group-text">
    <CiSearch className='fs-1' /></span>
    
  <input className="form-control fs-5" onChange={(e)=>setsearch(e.target.value)}  
  />
</div>
  )
}

export default SearchSection