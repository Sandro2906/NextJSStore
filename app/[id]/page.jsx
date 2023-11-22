import React from 'react'
import GridInfo from '../components/GridInfo'

const PageId = async ({params}) => {

  async function getData(){
    const res = await fetch(`https://dummyjson.com/products/${params.id}`)
    const data = await res.json()
    return data
  }
  
  const data = await getData()

  return (
    <div className='w-full h-auto p-7 flex flex-col justify-center items-center'>
    <div className='w-2/3 h-autp p-5 bg-purple-950 shadow-xl text-white rounded-xl'>
    <div className='w-full h-auto flex justify-center items-center p-5'>
      <h1 className='text-6xl font-semibold'>{data.title}</h1>
      </div>
      <div className='w-full h-[450px] flex justify-center items-center'>
     <img className='w-full h-full object-cover rounded-lg' src={data.thumbnail} />
     </div>
      <div className='w-[300px] h-[100px] flex justify-center items-center my-5 bg-purple-500 rounded-full shadow-md'>
      <h1 className='text-4xl font-semibold'>Price: {data.price}$</h1>
      </div>
      <h1 className='text-2xl font-semibold pb-2'>Description</h1>
      <div className='w-full min-h-[100px] bg-purple-500 rounded-md shadow-md p-2 '>
      <p>{data.description}</p>
      </div>
      <GridInfo id={params.id} />
      </div>
    </div>
  )
}

export default PageId