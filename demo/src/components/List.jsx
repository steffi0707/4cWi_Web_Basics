import React from 'react'

export default function List({drink1, drink2, drink3}) {
  return (
    <div className="bg-yellow-600 m-2 p-1.5 hover:bg-yellow-800 w-[200px] h-[80px] m-[30px] p-[5px]">
        <p className="border-b-2 border-white">{drink1}</p>
        <p className="border-b-2 border-white">{drink2}</p>
        <p className="border-b-2 border-white">{drink3}</p>
    </div>
  )
}