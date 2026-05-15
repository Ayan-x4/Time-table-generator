import React from 'react'
import Body from './components/Body'



const App = () => {
  return (
    <div className='overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
    <Body/>
    </div>
  )
}

export default App
