'use client'
import React, { useState } from 'react'
import Image from 'next/image';

function Footer() {

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // دالة لمعالجة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    // عرض البيانات في الـ console
    console.log({ fullName, phoneNumber, message });

    // هنا يمكن إرسال البيانات إلى API أو تخزينها

    // إعادة تعيين الحقول بعد الإرسال
    setFullName("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <div className='bg-[#131311] p-20'>
      <h1 className='text-white font-bold uppercase text-xl mb-10 text-center'>Get in touch</h1>

      <div className='flex flex-col sm:flex-row sm:space-x-10 w-full items-center'>
        {/* First Column */}
        <div className='col-1 text-white w-full sm:w-1/2 mb-10 sm:mb-0'>
          <div className='address flex items-center gap-3'>
            <div className='icone bg-gray-700 h-10 w-10 flex items-center justify-center rounded-full'>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className='info flex flex-col'>
              <h1>Address</h1>
              <p className='text-[#FFECC8]'>simply dummy text of the printing</p>
            </div>
          </div>

          <div className='address flex items-center gap-3 mt-4'>
            <div className='icone bg-gray-700 h-10 w-10 flex items-center justify-center rounded-full'>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className='info flex flex-col'>
              <h1>Phone number</h1>
              <p className='text-[#FFECC8]'>+9693 43432 232</p>
            </div>
          </div>

          <div className='address flex items-center gap-3 mt-4'>
            <div className='icone bg-gray-700 h-10 w-10 flex items-center justify-center rounded-full'>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className='info flex flex-col'>
              <h1>Email</h1>
              <p className='text-[#FFECC8]'>Flagperformance@gmail.com</p>
            </div>
          </div>

          <div className='flex mt-5 items-center ml-1'>
            <div className='text-3xl pr-5'>
              <i className="fa-solid fa-compass"></i>
            </div>
            <h1 className='text-[#FFECC8]'>Saturday (12pm to 8am)</h1>
          </div>

          <div className='flex mt-5 items-center ml-1'>
            <div className='text-3xl pr-5'>
              <i className="fa-solid fa-compass"></i>
            </div>
            <h1 className='text-[#FFECC8]'>Sunday (9am to 9pm)</h1>
          </div>

          <div className='flex mt-5 items-center ml-1'>
            <div className='text-3xl pr-5'>
              <i className="fa-solid fa-compass"></i>
            </div>
            <h1 className='text-[#FFECC8]'>Friday (Off)</h1>
          </div>

          {/* Map Section */}
          <div className='relative mt-20'>
            <Image src={'/MAP.jpeg'} width={300} height={200} className='h-[300px] w-[250px]' alt='map' />
            <div className='p-2 flex flex-col bg-white text-black w-40 items-center relative -top-40 left-10'>
              Garage location
              <span className='font-bold'>Stake tower</span>
            </div>
          </div>
        </div>

        {/* Second Column (Form Section) */}
        <div className='form bg-[#1A1A1A] w-full sm:w-1/2 p-10 pb-10'>
          <div className='col-2 text-white '>
            <h1 className='uppercase text-neutral-500 font-bold'>Got any <span className='font-bold text-white'>question</span> ?</h1>
            <h1 className='uppercase text-neutral-500 font-bold'>Need advice for a <span className='font-bold text-white'>build</span>?</h1>
            <h1 className='uppercase font-bold mb-5'>Send a message....</h1>
          </div>

          <form className='text-white flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <input type='text' id='name' placeholder='Full Name' className='mt-2 p-1 rounded-md mb-5 border border-neutral-500' value={fullName} 
              onChange={(e) => setFullName(e.target.value)} />

            <label htmlFor='phone' className='mt-4'>Phone Number</label>
            <input type='number' id='phone' placeholder='Phone Number' className='mt-2 p-1 rounded-md mb-5 border border-neutral-500' value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} />

            <label htmlFor='message'>Message</label>
            <textarea placeholder='Leave us a message' className='p-2 mt-3 border border-neutral-500 h-[200px]' value={message} 
              onChange={(e) => setMessage(e.target.value)}></textarea>

            <button type='submit' className='bg-white text-black w-22 mt-5 rounded-xl'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer;
