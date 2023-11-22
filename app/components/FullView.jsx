import React from 'react'
import View from './View'
async function getData(){
    const res = await fetch('https://dummyjson.com/products/search?q=phone')
    const data = await res.json()
    return data.products
  }

const FullView = async () => {
    const data = await getData();
  return (
    <div className='grid lg:grid-cols-2 p-4 gap-3 grid-cols-1'>
    {
      data.map(({id,title,price,thumbnail})=>(
        <View key={id} id={id} price={price} title={title} thumbnail={thumbnail} />
      ))
    }
    </div>
  )
}

export default FullView