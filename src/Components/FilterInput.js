import React from 'react'
import { useState , useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { products } from '../backend/db/products'


const categoryInput = ['Sofas' , "Bed" ,  "Tables" , "Chairs" , "Wardrobe" , "Dinning Table"]
const ratingInput = ["4star" , "3star", "2star", "1star"]

const FilterInput = () => {
  const {originalProductData , setProducts , setCheckBoxFilter , checkboxFilter , setOriginalProductData } = useContext(DataContext)

  const [sortOption , setSortOption] = useState("")
  const [ratingOption , setRatingOption] = useState("")
  const [priceVal , setPriceVal] = useState("")
  const [minPrice  , setMinPrice] = useState("")
  const [maxPrice , setMaxPrice] = useState("")

  useEffect(() => {
     if(sortOption === "option1"){
      setProducts(originalProductData.sort((a,b) => a.price - b.price))
     }
     if(sortOption === "option2"){
      setProducts(products.sort((a,b) => b.price - a.price))
     }
   },[sortOption])


  const handleClear = () => {
    console.log("hello")
   }
   
   const handleRangeInput = (e) => {
     setPriceVal(e.target.value)
     setMinPrice("2600")
     setMaxPrice("55000")
     const filterResult = products.filter(item => item.price === priceVal)
     setOriginalProductData(filterResult)
   }
   
   const handleRatingInput = (e) => {
     const value = e.target.value
     setRatingOption(e.target.value)
     const filterResult = originalProductData.filter(item => item.rating === value)
     setProducts(filterResult)
   }
   
    const handleCheckInput = (e) => {
     const {checked , value} = e.target
      if(checked){
       setCheckBoxFilter([...checkboxFilter , value])
      }else{
       const filterByCategory = checkboxFilter.filter(item => item !== value)
       setCheckBoxFilter(filterByCategory)
      }
     }



  return (
       <aside>
        <div className="filter_heading">
          <h2>Filters</h2>
          <h4 onClick = {handleClear} style = {{textDecoration : "underline"}}>Clear</h4>
        </div>
        <div className="filter_price">
          <label htmlFor="pricerange">Price </label>
          <input id = "pricerange" type="range" value = {priceVal} min = {minPrice} max = {maxPrice} defaultValue= "2600"  onChange={handleRangeInput}/>
        </div>
        <div className="filter_category">
          <h4>Category</h4>
          {categoryInput.map(item => (
              <div className="filter_inputs">
              <input type="checkbox" id= {item}  value = {item}  onChange={handleCheckInput}  />
              <label htmlFor= {item}>{item}</label>
              </div>
            ))}
        </div>
        <div className="filter_ratings">
          <h4>Rating</h4>
          {ratingInput.map(item => (
            <div key = {item} className="filter_inputs">
            <input type="radio" id= {item}  value = {item}  checked = {ratingOption === item} onChange={handleRatingInput} />
            <label htmlFor= {item}>{item} & above </label>
            </div>
          ))}
        </div>
        <div className="filter_sort">
          <h4>Sort By</h4>
            <div className="filter_inputs">
             <input type="radio" id = "lowHigh" value = "option1"  checked={sortOption === "option1"}  onChange={(e) => setSortOption("option1") }/>
              <label htmlFor = "lowHigh">Price - Low to High</label>
              </div>
              <div className="filter_inputs">
              <input type="radio"  id = "highLow" value = "option2"  checked={sortOption === "option2"} onChange={(e) => setSortOption("option2")}  />
              <label htmlFor="highLow">Price - High to Low </label>
            </div>
        </div>
      </aside>
  )
}

export default FilterInput