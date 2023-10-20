import React from 'react'
import { useParams } from 'react-router-dom'

export default function Single() {
    const {id} = useParams()
    console.log(id);
  return (
    <div>
      <h1>abbaaaas</h1>
    </div>
  )
}
