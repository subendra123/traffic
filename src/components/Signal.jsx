import React from 'react'

const Signal = ({color,isActive}) => {
  return (
  <>
  <div className="container">
  <div className="signal" style={{ backgroundColor:`${isActive ? color:"grey"}` }}></div>
  </div>
  </>
  )
}

export default Signal