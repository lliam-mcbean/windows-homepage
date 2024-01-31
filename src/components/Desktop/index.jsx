import React from 'react'

export default function Desktop({setDocuments, setComputer, setBrowser}) {
  return (
    <div className='p-2'>
        <img onClick={() => setDocuments(true)} className='py-2 w-24 cursor-pointer' src="/icons/documents.png" alt="" />
        <img onClick={() => setComputer(true)}className='py-2 w-24 cursor-pointer' src="/icons/computer.png" alt="" />
        <img onClick={() => setBrowser(true)} className='py-2 cursor-pointer w-24' src="/icons/internet.png" alt="" />
    </div>
  )
}
