import React from 'react'
import Card from './Card'
import News from './News'

function Review() {
  return (
    <div className="bg-[#131311] p-10 min-h-screen">
  <h2 className="text-white text-3xl text-center mb-6">Customer Reviews</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 xl:grid-cols-4 ">
    <div className="flex justify-center items-center">
      <Card />
    </div>
    <div className="flex justify-center items-center">
      <Card />
    </div>
    <div className="flex justify-center items-center">
      <Card />
    </div>
    <div className="flex justify-center items-center">
      <Card />
    </div>
    <div className="flex justify-center items-center">
      <Card />
    </div>
    <div className="flex justify-center items-center">
      <Card />
    </div>
    <div className="flex justify-center items-center">
      <Card />
    </div>
    <div className="flex justify-center items-center">
      <Card />
    </div>
  </div>

  {/* All review button with margin at the bottom */}
  <button className="bg-[#FFC34C] w-[232px]  h-[40px] text-center cursor-pointer  p-1 mb-5  mt-20 font-bold mx-auto flex items-center justify-center">
    All review
  </button>
</div>


  )
}

export default Review
