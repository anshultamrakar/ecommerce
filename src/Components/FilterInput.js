import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'


const categoryInput = ['Sofas' , "Bed" ,  "Tables" , "Chairs" , "Wardrobe" , "Dinning Table"]
const ratingInput = ["4star" , "3star", "2star", "1star"]

const FilterInput = () => {
  const { sortOption ,  setSortOption ,  ratingOption , setRatingOption , priceVal , setPriceVal , handleCheckInput   } = useContext(DataContext)



  return (
       <aside>
        <div className="filter_heading">
          <h2>Filters</h2>
          <h4 style = {{textDecoration : "underline"}} >Clear</h4>
        </div>
        <div className="filter_price">
          <label htmlFor="pricerange">Price </label>
          <input id = "pricerange" type="range" value = {priceVal}  min = "2600" max = "55000" onChange={(e) => setPriceVal(e.target.value)} />
        </div>
        <div className="filter_category">
          <h4>Category</h4>
          {categoryInput.map(item => (
              <div className="filter_inputs">
              <input type="checkbox" id= {item}  value = {item} onChange= {handleCheckInput}  />
              <label htmlFor= {item}>{item}</label>
              </div>
            ))}
        </div>
        <div className="filter_ratings">
          <h4>Rating</h4>
          {ratingInput.map(item => (
            <div key = {item} className="filter_inputs">
            <input type="radio" id= {item}  value = {item}  checked = {ratingOption === item} onChange={(e) => setRatingOption(e.target.value)} />
            <label htmlFor= {item}>{item} & above </label>
            </div>
          ))}
        </div>
        <div className="filter_sort">
          <h4>Sort By</h4>
            <div className="filter_inputs">
             <input type="radio" id = "lowHigh" value = "option1"  checked={sortOption === "option1"}  onChange={(e) => setSortOption("option1")}/>
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