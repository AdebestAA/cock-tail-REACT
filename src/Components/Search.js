import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context'
import { useRef } from 'react'

const Search = () => {
  const {inputValue,setInputValue}= useGlobalContext()
const searchRef = useRef()

const handleChange = (e)=>{

setInputValue(searchRef.current.value)
}
const handleSubmit =(e)=>{
e.preventDefault()
}
  return (

   <form action="" onSubmit={handleSubmit}>
    <label htmlFor="search">
        search for your favorite cocktails
    </label>
    <input 
    type="text" 
    id="search"
    ref={searchRef}
    onChange={handleChange}
    value={inputValue}
    />
    </form>
  
  )
}

export default Search
