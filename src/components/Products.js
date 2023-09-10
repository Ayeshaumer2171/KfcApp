import React from 'react'
import KfcCards from './KfcCards'

 export default function Products({increment,items}) {
  return (
    <div className='row row-cols-1 row-cols-md-4 g-4 '>
      {items.map(item=> <KfcCards key={item.id} item={item} increment={increment}/>)}
    </div>
  )
}
