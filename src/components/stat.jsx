import React from 'react'

export default function Stat (props) {
  return <div className={`stat ${props.name}`}>
    <div className='name'>{props.name}</div>
    <div className='value'>{props.value}</div>
    <div className='modifier'>{props.modifier}</div>
    <div className='debility'>{props.debility}</div>
  </div>
}
// TODO: calculate modifier by value using idan's stat module