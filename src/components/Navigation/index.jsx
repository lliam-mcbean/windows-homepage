import React from 'react'
import Start from './Start'
import Time from './Time'

export default function Navigation({setStart}) {
  return (
    <div className='absolute w-screen h-10 bg-[#D4D0C8] justify-between bottom-0 flex items-center px-1'>
        <Start />
        <Time />
    </div>
  )
}
