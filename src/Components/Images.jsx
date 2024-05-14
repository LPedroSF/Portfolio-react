import React from 'react'

function Images({image, c}) {
  return (
    <div>
      <img src= {image} className={c}></img>
    </div>
  )
}

export default Images