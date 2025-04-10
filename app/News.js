import React from 'react'
import Info from './Infonews'
import Buttoninfonews from './Buttoninfonews'

function News() {
  return (
    <div className='p-10 bg-[#131311] w-full '>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4'>
  
        <div className='img hidden lg:block'>
        <img
  src="/cars.jpeg"
  alt="car"
  className="w-[275px] h-[805px] object-fill ml-20 filter grayscale opacity-80"
/>
        </div>

        {/* Second Column (Text and Buttons) */}
        <div className='info bg-[#212121]        ' >
          {/* First Section */}
          <div className='row-1 relative pt-10'>
            <div className='w-1 h-5 bg-[#FF8C00] absolute left-10 rotate-90'></div>
            <h1 className='text-white px-7 py-4'>latest</h1>

            <Info 
              head="Elevate your vehicle's potentials with our bespoke services"
              text={
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, ut fermentum massa volutpat id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...
                  <a href="#read-more" className="text-[#FFC34C] hover:text-[#FF8C00] font-bold"> Read more</a>
                </span>
              }
            />
            
            <div className='flex mt-5 gap-5 ml-14'>
              <Buttoninfonews inside="#medition"/>
              <Buttoninfonews inside="#mentaplace"/>
            </div>
          </div>

          {/* Second Section */}
          <div className='row-2'>
            <Info  
              head="Elevate your vehicle's potentials with our bespoke services"
              text={
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, ut fermentum massa volutpat id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...
                  <a href="#read-more" className="text-[#FFC34C] hover:text-[#FF8C00] font-bold"> Read more</a>
                </span>
              }
            />
            
            <div className='flex mt-5 gap-5 ml-14'>
              <Buttoninfonews inside="#anarshy"/>
              <Buttoninfonews inside="#silence"/>
            </div>
          </div>

          {/* Button to load more news */}
          <div className='px-15'>
            <button className='bg-[#FFC34C] capitalize font-bold w-[120px] p-2 mt-15 cursor-pointer   mb-4 lg:mb-0 '>
              more news
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News;
