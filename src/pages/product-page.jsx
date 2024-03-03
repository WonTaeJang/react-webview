import { useState } from "react"

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]

const SearchBar = ({filterText, onChangeFilterText, inStock, onChangeInStock}) => {
  return (
    <>
      <div>
        <input 
          type="text" 
          placeholder="Search..."
          value={filterText}
          onChange={(e) => {
            onChangeFilterText(e.target.value)
          }}
        />
      </div>

    <label>
      <input 
        type="checkbox" 
        id="chk"
        checked={inStock}
        onChange={() => onChangeInStock(!inStock)}
      />
      Only show products in stock
    </label>
    </>

  )
}

const ProductTable = ({products}) => {
  console.log(products)
  return (
    <>
      <div>

      </div>
    </>
  )
}

export default function FilterableProductTable () {
  let [filterText, setFilterText] = useState('')
  let [inStock, setInStock] = useState(false)
  let products = PRODUCTS

  return (
    <>
      {/* <div>
        <span>{filterText}</span>
        <span>{inStock.toString()}</span>
      </div> */}
      <SearchBar 
        filterText={filterText}
        onChangeFilterText={setFilterText}
        inStock={inStock}
        onChangeInStock={setInStock}
      />
      <ProductTable 
        products={products}
      />
    </>
  )
}
