'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Button = ({id}) => {

  const router = useRouter()

 const handleClick = () =>{
   router.push(`/${id}`)
 }

  return (
    <button onClick={handleClick} className='w-full h-auto p-5 bg-yellow-400 text-white mt-3 rounded-md shadow-xl text-4xl font-extrabold texts hover:bg-white hover:text-yellow-500'>MORE INFO</button>
  )
}

export default Button