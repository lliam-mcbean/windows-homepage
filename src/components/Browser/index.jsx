import React from 'react'

export default function Browser({setBrowser}) {
  return (
    <div style={{border: 'outset'}} className='w-[700px] h-[500px] bg-[#D4D0C8] absolute top-[10px] left-[150px]'>
    <div className='h-[20px] m-1 w-full bg-gradient-to-r from-[#3A6EA5] flex items-center justify-end'>
        <div className='m-2 flex'>
        <img onClick={() => setBrowser(false)} className='h-4 w-4 cursor-pointer' src="/icons/minimize.png" alt="" />
        <img onClick={() => setBrowser(false)} className='h-4 w-4 cursor-pointer' src="/icons/full.png" alt="" />
        <img onClick={() => setBrowser(false)} className='h-4 w-4 cursor-pointer' src="/icons/exit.png" alt="" />
        </div>
    </div>
    <div className='w-full h-5/6 p-1 mt-4'>
    <div className='h-full w-full text-sm flex flex-wrap justify-between relative'>
    <img src="./icons/browser.png" alt="" />
    <div className='absolute top-48 left-32 flex'>
        <a className="mx-4" href="">
            <img className='w-16 h-16' src="./icons/linkedin.png" alt="" />
        </a>
        <a className="mx-4" href="">
            <img className='w-16 h-16' src="./icons/github.png" alt="" />
        </a>
        <a className="mx-4" href="">
            <img className='w-16 h-16' src="./icons/codewars.svg" alt="" />
        </a>
        <a className="mx-4" href="">
            <img className='w-16 h-16' src="./icons/instagram.png" alt="" />
        </a>
    </div>
    </div>
    </div>
</div>
  )
}
