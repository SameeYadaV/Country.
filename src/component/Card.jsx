import React, { useState } from 'react'


const Card = ({data,style}) => {
 
  return (
    <div className='m-2' >
          < div style={{width: "18 rem"}}    >
    <div className="card  " style={style}>
    <img src={data.flags.png} className="card-img-top" alt={data.name.common}/>
    <div className="card-body h-25">
      <h5 className="card-title">{data.name.common }</h5>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{`Population : ${data.population}`}</li>
      <li className="list-group-item">{`Region : ${data.region}`}</li>
      <li className="list-group-item">{`Capital : ${data.capital}`}</li>
    </ul>
  </div>
  </div>
   </div>
  )
}

export default Card