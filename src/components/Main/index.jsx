import React from 'react'
import { Canvas } from '@react-three/fiber'
import Model from '../Model'

export default function Main() {
  return (
    <div className='w-screen h-screen bg-black overflow-hidden'>
      <Canvas>
          <Model />
          <ambientLight />
          <directionalLight position={[0,1,2]} />
      </Canvas>

      <div className='absolute top-0 w-screen h-screen z-50 text-white text-2xl'>
        <div className='w-full h-[30vh] bg-red-500 flex items-center justify-center'>
          <div className='py-4 px-8 border border-2 rounded-full cursor-pointer hover:bg-white hover:text-black' onClick={() =>{
            window.open("https://github.com/lliam-mcbean", '_blank').focus()
          }}>GitHub</div>
        </div>
        <div className='w-full h-[40vh] flex'>
          <div className='w-1/3 h-full flex justify-center items-center'>
              <div className='py-4 px-8 border border-2 rounded-full cursor-pointer hover:bg-white hover:text-black' onClick={() => {
                window.open("https://www.linkedin.com/in/lliam-mcbean/", '_blank').focus()
              }}>LinkedIn</div>
          </div>
          <div className='w-1/3 h-full'></div>
          <div className='w-1/3 h-full flex justify-center items-center'>
              <div className='py-4 px-8 border border-2 rounded-full cursor-pointer hover:bg-white hover:text-black' onClick={() => {
                window.open("https://lliam-resume.netlify.app", '_blank').focus()
              }}>Resume</div>
          </div>
        </div>
        <div className='w-full h-[30vh] bg-red-500 flex items-center justify-center'>
          <div className='py-4 px-8 border border-2 rounded-full cursor-pointer hover:bg-white hover:text-black' onClick={() =>{
            window.open("https://www.instagram.com/lliammcbean/", '_blank').focus()
          }}>Instagram</div>
        </div>
      </div>
    </div>
  )
}
