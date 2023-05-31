import React from 'react'
import './input.css'
import {BsSearch} from 'react-icons/bs'

const Input = () => {
  return (
    <form className='input'>
    <input type={'text'} placeholder='Please enter your location.' className='input_value'>
    </input>
    <span className='input_icon'>
      <BsSearch/>
        {/* 🔍 */}
      
    </span>
    </form>
  )
}

export default Input 