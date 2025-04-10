import React from 'react'

function Head(props) {
  return (
    <div>
        <h1 className='uppercase font-bold text-xl  text-white pl-15' >{props.header}</h1>
    </div>
  )
}

export default Head;