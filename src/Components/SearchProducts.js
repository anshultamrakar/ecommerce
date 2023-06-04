import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

const SearchProducts = () => {
  const {search , setSearch} = useContext(DataContext)
  return (
    <div>
        <input placeholder='Search' type = "text" value = {search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default SearchProducts