import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center md:justify-between  justify-between md:h-12 h-10 md:mb-2 mb-3 md:px-10 '>
      <div className='text-white flex md:gap-3 gap-1 items-center justify-around'>
        <span><svg strokeWidth="0" className='h-15 md:hidden mr-16 ml-[-6px] ' fill="#ffffff" viewBox="-8 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>menu</title> <path d="M15.4 12.6h-14.56c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h14.52c0.48 0 0.84 0.36 0.84 0.84 0.040 0.44-0.36 0.84-0.8 0.84zM15.4 16.84h-14.56c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h14.52c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.8 0.84zM15.4 21.080h-14.56c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h14.52c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.8 0.84z"></path> </g></svg></span>
       <svg className='md:h-8 h-11' viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" fill="#575AEE"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style></style> </defs> <g id="schedule"> <path class="cls-1" d="M22.5,3H21V2a1,1,0,0,0-1-1H19a1,1,0,0,0-1,1V3H14V2a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1V3H7V2A1,1,0,0,0,6,1H5A1,1,0,0,0,4,2V3H2.5A1.5,1.5,0,0,0,1,4.5v18A1.5,1.5,0,0,0,2.5,24h16A5.51,5.51,0,0,0,24,18.5s0-.08,0-.13,0,0,0,0V4.5A1.5,1.5,0,0,0,22.5,3ZM19,2l1,0,0,3L19,5ZM12,2l1,0V3.44s0,0,0,.06,0,0,0,.07L13,5,12,5ZM5,2,6,2,6,5,5,5ZM2.5,4H4V5A1,1,0,0,0,5,6H6A1,1,0,0,0,7,5V4h4V5a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V4h4V5a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4h1.5a.5.5,0,0,1,.5.5V8H2V4.5A.5.5,0,0,1,2.5,4Zm16,19A4.5,4.5,0,1,1,23,18.5,4.51,4.51,0,0,1,18.5,23Zm0-10a5.49,5.49,0,0,0-3.15,10H2.5a.5.5,0,0,1-.5-.5V9H23v6.35A5.49,5.49,0,0,0,18.5,13Z"></path> <path class="cls-1" d="M20.72,19.05,19,18.19V16.5a.5.5,0,0,0-1,0v2a.51.51,0,0,0,.28.45l2,1a.54.54,0,0,0,.22.05.5.5,0,0,0,.22-.95Z"></path> </g> </g></svg>
        <h1 className='md:text-xl text-xl md:flex flex  md:flex-row flex-col md:gap-2 tracking-wide leading-tight font-semibold'>
          Time Table <span className='text-[#575AEE]'>Generator</span>
        </h1>
      </div>
      <div className='flex gap-5  items-center'>
        <div className='px-5 bg-[#575AEE] text-white py-2 md:font-semibold rounded-md  md:flex items-center gap-1 md:block hidden ' >
        <span className='text-center'><svg className='h-5 w-5' fill="#ffffff" width="18px" height="18px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"></path> </g></svg></span>
         Generate Time Table
        </div>
        <div className='px-5 bg-slate-800 text-white py-2 font-semibold rounded-md border-2 border-gray-700 md:flex gap-1 items-center md:block hidden'>
        <span ><svg className='h-3 w-3' fill="#ffffff" height="200px" width="200px" version="1.1" id="Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20,24H0V0h14.41L20,5.59v4.38h-2V8h-6V2H2v20h18V24z M14,6h3.59L14,2.41V6z M18.71,20.71l-1.41-1.41L19.59,17H11v-2h8.59 l-2.29-2.29l1.41-1.41L23.41,16L18.71,20.71z"></path> </g></svg></span>
         Export
        </div>
         <div className='md:px-5 md:bg-slate-800 text-white md:py-2  font-semibold md:rounded-md md:border-2 border-gray-700'>
         <span><svg  className='md:h-5 h-8 md:w-5 w-8 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
        </div>
      </div>
    </div>
  )
}

export default Nav
