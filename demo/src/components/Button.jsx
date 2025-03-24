import React from 'react'

export default function Button({title, onClick}) {
  return (
    <button onClick={onClick} className="bg-yellow-600 m-2 p-1.5 hover:bg-yellow-800">{title}</button>
  )
}