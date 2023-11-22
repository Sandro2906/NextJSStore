import React from 'react'
import Linkedin from './Linkedin'

const Footer = () => {
  return (
    <div className='w-full h-auto p-10 flex flex-col bg-purple-900 justify-center items-center'>
    <div>
    <h1 className='text-5xl font-extrabold italic text-white texts'>STORE</h1>
    </div>
    <div className='p-4'>
    <h1 className='text-xl text-white underline'>sandro.yt29@gmail.com</h1>
    </div>
   <Linkedin />
    <div>
    <h1>© Sandro 2023</h1>
    </div>
    </div>
  )
}

export default Footer