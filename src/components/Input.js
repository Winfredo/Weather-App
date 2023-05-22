import React from 'react'
import './input.css'
import { BsSearch } from 'react-icons/fa';

const Input = () => {
  return (
    <form className='input'>
    <input type={'text'} placeholder='Please enter your location.'>
    </input>
    <span>
    <BsSearch/>
    hello winfred

    </span>
    </form>
  )
}

export default Input