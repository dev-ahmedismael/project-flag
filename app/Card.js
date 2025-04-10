

import React from 'react'
import Image from 'next/image'

function Card() {
  return (
    <div className='text-white border border-white    bg-[#1e1b12] rounded-xl w-[327px] p-3  h-[168px] '>
<div className='flex flex-row-reverse '>
    
<div className='flex flex-row-reverse items-center justify-center  pr-6'>
<div className="flex items-center justify-center ">
  <Image 
    src={"/person.jpeg"} 
    width={35} 
    height={35} 
    alt="img" 
    className="h-[40px] w-[40px] rounded-full ml-6" />
</div>





    <div className='info'>
    <h1 className="font-cairo font-bold text-[10px] leading-[148%] tracking-[0%] text-right">
  محمد سالم
</h1>

<p className="font-cairo font-light text-[10px] leading-[148%] tracking-[0%] text-right">
  MohamedSallem24@gmail.com
</p>

    </div>

</div>




    <div className="star flex text-[#FFC34C] ">
  <i className="fa-solid fa-star mr-1 w-[13px] h-[13px] rounded-[0.7px]"></i> {/* النجمة الممتلئة */}
  <i className="fa-solid fa-star mr-1 w-[13px] h-[13px] rounded-[0.7px]"></i> {/* النجمة الممتلئة */}
  <i className="fa-solid fa-star mr-1 w-[13px] h-[13px] rounded-[0.7px]"></i> {/* النجمة الممتلئة */}
  <i className="fa-solid fa-star mr-1 w-[13px] h-[13px] rounded-[0.7px]"></i> {/* النجمة الممتلئة */}
  <i className="fa-regular fa-star mr-1 w-[13px] h-[13px] rounded-[0.7px] text-shadow-gray-800"></i> {/* النجمة الفارغة */}
</div>






</div>


  



<div className='pargraph mt-5 px-7 mb-5 '>
    <p className='w-full text-[#FFFFFF] font-cairo font-light text-[10px] leading-[1.48] tracking-[0]'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
    </p>

</div>






    </div>
  )
}

export default Card

