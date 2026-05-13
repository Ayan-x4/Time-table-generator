import React from 'react'
import Nav from './Nav'
import TimetableContainer from './TimetableContainer'

const Body = () => {
  return (
    <div className='md:px-0  md:py-2 py-3 px-1 bg-[#0A0F1B]'>
      <Nav/>
      <TimetableContainer/>
    </div>
  )
}

export default Body
