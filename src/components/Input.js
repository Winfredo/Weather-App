import React from 'react'
import './input.css'
import {BsSearch} from 'react-icons/bs'

const Input = ({text,submit,func}) => {
  return (
    <form className='input' onSubmit={submit}>
    <input type={'text'} placeholder='Please enter your location.' className='input_value' onChange={text}>
    </input>
    <span className='input_icon'onClick={func}>
      <BsSearch/>
      
    </span>
    </form>
  )
}

export default Input 