import React from 'react'
import Image from 'next/image'
function FooterImg() {
  return (
    <div className='relative w-full text-neutral-100 '>
     <div>
    <img src="/sea.jpeg" alt="sea" className="w-full h-100 filter grayscale brightness-75" />
    
<div className=' text-neutral-100 text-center text-sm  w-full absolute bottom-10  '>© 2024 Flag Performance company</div>
</div>
<div className='absolute top-15 px-20' >

<h1 className="font-bold text-amber-300 capitalize text-3xl italic">
  <span className="block">flag</span>
  <span className="font-bold text-amber-300 capitalize italic text-sm block">performance</span>
</h1>
<h1 className=' w-2xl mb-4 text-sm pt-2 font-bold'>flag performance is your primer desetination for high performance automative  services and accesrroies we specialize is evaluting your vehicle performance andd style</h1>

<div className='icone flex gap-5  text-neutral-100'>
<i className="fa-brands fa-facebook"></i>
<i className="fa-brands fa-instagram"></i>
<i className="fa-solid fa-house"></i>

</div>
<div className='links'> 
  <ul className='flex gap-5  text-neutral-200 capitalize font-thin text-sm mt-4 font-thin'>
    <li>home</li>
    <li>gallery</li>
    <li>services</li>
    <li>news</li>
    <li>inquires</li>
  </ul>

</div>

</div>

<div>

</div>


    </div>
  )
}

export default FooterImg