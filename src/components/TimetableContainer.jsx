import React from 'react'
import Input from './Input'
import Table from './Table'

const TimetableContainer = () => {
  return (
    <div className='md:h-full h-full bg-[#121A2A] md:p-5 md:grid grid md:grid-cols-[30%_70%]'>
    <Input/>
    <Table/>
      
    </div>
  )
}

export default TimetableContainer
