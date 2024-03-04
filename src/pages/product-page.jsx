import { useState } from "react"
import '../assets/css/product.css'

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

const ProductCategoryRow = ({category}) => {
  return (
    <div>
      <span>{category}</span>
    </div>
  )
}

const ProductRow = ({product}) => {
  return (
    <>
      <div className="product-row">
        <span className={(product.stocked ? '': 'product-row__active')}>{product.name}</span>
        <span>{product.price}</span>
      </div>
    </>
  )
}

const ProductTable = ({products}) => {
  const rows = []
  let lastCategory = null

  for(const product of products) {
    console.log(product)

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          category={product.category} 
          key={product.category}
        />
      )

      lastCategory = product.category
    }

    rows.push(
      <ProductRow 
        product={product}
        key={product.name}
      />
    )
  }

  return (
    <>
      <div className="product-title">
        <span>Name</span>
        <span>Price</span>
      </div>

      <div>{rows}</div>
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
      <div className="product">
        <div className="product-container">
          <SearchBar 
            filterText={filterText}
            onChangeFilterText={setFilterText}
            inStock={inStock}
            onChangeInStock={setInStock}
          />
          <ProductTable 
            products={products}
          />
        </div>

      </div>
    </>
  )
}
