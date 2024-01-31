import React from 'react'

export default function Documents({setDocuments}) {
  return (
    <div style={{border: 'outset'}} className='w-[500px] h-[300px] bg-[#D4D0C8] absolute top-[50px] left-[200px]'>
        <div className='h-[20px] m-1 w-full bg-gradient-to-r from-[#3A6EA5] flex items-center justify-end'>
            <div className='m-2 flex'>
            <img onClick={() => setDocuments(false)} className='h-4 w-4 cursor-pointer' src="/icons/minimize.png" alt="" />
            <img onClick={() => setDocuments(false)} className='h-4 w-4 cursor-pointer' src="/icons/full.png" alt="" />
            <img onClick={() => setDocuments(false)} className='h-4 w-4 cursor-pointer' src="/icons/exit.png" alt="" />
            </div>
        </div>
        <div className='w-full h-5/6 p-1 mt-4'>
        <div style={{border: 'outset'}} className='h-full w-full bg-white text-sm flex flex-wrap overflow-y-scroll text-center'>
            <a className='p-4' href='https://github.com/soupIsTheCurrencyOfTheFuture/bitcoin-server' target="_blank">
                <img className='w-20' src="./icons/folder.png" alt="" />
                <div >bitcoin server</div>
            </a>
            <a className='p-4' href='https://github.com/soupIsTheCurrencyOfTheFuture/tweeter' target="_blank">
                <img className='w-20' src="./icons/folder.png" alt="" />
                <div >tweeter</div>
            </a>
            <a className='p-4' href='https://github.com/soupIsTheCurrencyOfTheFuture/greengrocer' target="_blank">
                <img className='w-20' src="./icons/folder.png" alt="" />
                <div >greengrocer</div>
            </a>
            <a className='p-4' href='https://github.com/soupIsTheCurrencyOfTheFuture/scheduler-app' target="_blank">
                <img className='w-20' src="./icons/folder.png" alt="" />
                <div >scheduler</div>
            </a>
            <a className='p-4' href='https://github.com/soupIsTheCurrencyOfTheFuture/notes' target="_blank">
                <img className='w-20' src="./icons/folder.png" alt="" />
                <div >notes</div>
            </a>
            <a className='p-4' href='https://github.com/soupIsTheCurrencyOfTheFuture/sandbox' target="_blank">
                <img className='w-20' src="./icons/folder.png" alt="" />
                <div >sandbox</div>
            </a>
        </div>
        </div>
    </div>
  )
}
