import React, { useState } from 'react'
import Desktop from '../Desktop'
import Navigation from '../Navigation'
import Documents from '../Documents'
import Computer from '../Computer'
import Browser from '../Browser'

export default function Main() {
    const [documents, setDocuments] = useState(false)
    const [computer, setComputer] = useState(false)
    const [browser, setBrowser] = useState(false)
    const [start, setStart] = useState(false)
  return (
    <div className='w-screen h-screen bg-[#3A6EA5] overflow-hidden'>
        <Desktop setDocuments={setDocuments} setComputer={setComputer} setBrowser={setBrowser} />
        <Navigation setStart={setStart} />
        <div>
            {computer && <Computer setComputer={setComputer} />}
            {browser && <Browser setBrowser={setBrowser} />}
            {documents && <Documents setDocuments={setDocuments} />}
        </div>
    </div>
  )
}
