import Image from 'next/image'
import React from 'react'
import Button from './Button'

const View = ({id, title, price, thumbnail}) => {
  return (
    <div className='w-full h-auto bg-purple-900  rounded-xl p-4'>
        <h1 className='text-4xl text-white font-extrabold'>{title}</h1>
        <h1 className='text-2xl text-white font-semibold my-2'>{price}$</h1>
        <div className='w-full h-[300px]'> 
        <img src={thumbnail}   className='object-cover w-full h-full rounded-lg' />
        </div>
        <Button id={id} />
    </div>
  )
}

export default View