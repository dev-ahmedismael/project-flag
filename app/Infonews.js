import React from 'react'
import Buttoninfonews from './Buttoninfonews'

function Info(props) {
  return (
    <div className='info bg-[#212121] text-white px-15 py-5'>


    <div >
        <h1 className='text-[#FFC34C] text-xl font-bold mb-4'>{props.head}</h1>
        <p className='text-sm'>
{props.text}
</p>



    </div>





</div>

  )
}

export default Info