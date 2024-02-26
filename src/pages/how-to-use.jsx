import { useState } from "react"

export default function HowToUse() {
  const myData = {
    name: 'jang',
    age: 19
  }

  const [count, setCount] = useState(0)

  function handleClick(e) {
    console.log(e)

    setCount(count + 1)
  }
  return (
    <>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>

      <div>
        <div>
          <span>my name is {myData.name}</span>
        </div>
        <div>
          <span>i old {myData.age}</span>
        </div>
      </div>
    </>
  )
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>Click {count} me</button>
  )
}