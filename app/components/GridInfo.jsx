import React from 'react'

async function getData({id}){
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    return data
  }

const GridInfo = async({id}) => {
    const data = await getData({ id })
  return (
    <div className='w-full h-auto my-2 gap-2 grid grid-cols-2 grid-rows-2'>
      <div className='w-full h-auto p-3 rounded-lg shadow-md bg-purple-500'><h1 className='text-2xl text-semibold'>Category: {data.category}</h1></div>
      <div className='w-full h-auto p-3 rounded-lg shadow-md bg-purple-500'><h1 className='text-2xl text-semibold'>Brand: {data.brand}</h1></div>
      <div className='w-full h-auto p-3 rounded-lg shadow-md bg-purple-500'><h1 className='text-2xl text-semibold'>Rating: {data.rating}</h1></div>
      <div className='w-full h-auto p-3 rounded-lg shadow-md bg-purple-500'><h1 className='text-2xl text-semibold'>Stock: {data.stock}</h1></div>
      </div>
  )
}

export default GridInfo