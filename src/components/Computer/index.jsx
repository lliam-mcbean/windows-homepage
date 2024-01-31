import React from 'react'

export default function Computer({setComputer}) {
    return (
        <div style={{border: 'outset'}} className='w-[700px] h-[400px] bg-[#D4D0C8] absolute top-[100px] left-[250px]'>
        <div className='h-[20px] m-1 w-full bg-gradient-to-r from-[#3A6EA5] flex items-center justify-end'>
            <div className='m-2 flex'>
            <img onClick={() => setComputer(false)} className='h-4 w-4 cursor-pointer' src="/icons/minimize.png" alt="" />
            <img onClick={() => setComputer(false)} className='h-4 w-4 cursor-pointer' src="/icons/full.png" alt="" />
            <img onClick={() => setComputer(false)} className='h-4 w-4 cursor-pointer' src="/icons/exit.png" alt="" />
            </div>
        </div>
        <div className='w-full h-5/6 p-1 mt-4'>
        <div className='h-full w-full text-sm flex flex-wrap justify-between'>
 
            <img style={{border: 'outset'}} className='h-full text' src="./icons/xtia.png" alt="" />
            <div style={{border: 'outset'}} className='bg-white w-72 h-full overflow-y-scroll'>
                <img style={{border: 'outset'}} className='w-[250px] m-2' src="./icons/os.png" alt="" />
                <ul>
                    <li className='flex items-center'>
                        <img className='h-12 w-12 mr-6' src="./icons/cpu.png" alt="" />
                        | intel i5 11th gen
                    </li>
                    <li className='flex items-center'>
                        <img className='h-12 w-12 mr-6' src="./icons/hdd.png" alt="" />
                        | 2tb SSD
                    </li>
                    <li className='flex items-center'>
                        <img className='h-12 w-12 mr-6' src="./icons/ram.png" alt="" />
                        | 64gb ram
                    </li>
                    <li className='flex items-center'>
                        <img className='h-12 w-12 mr-6' src="./icons/gpu.png" alt="" />
                        | RTX 3060 GPU
                    </li>
                    <li className='flex items-center'>
                        <img className='h-12 w-12 mr-6' src="./icons/case.png" alt="" />
                        | xtia xproto
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
    )
}
