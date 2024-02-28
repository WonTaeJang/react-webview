import '../assets/css/tic-tac-toe.css'

function Square({ value }) {
  return <button className='square'>{value}</button>
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="1"/>
        <Square value="1"/>
      </div>
      <div className="board-row">
        <Square value="1"/>
        <Square value="1"/>
        <Square value="1"/>
      </div>
      <div className="board-row">
        <Square value="1"/>
        <Square value="1"/>
        <Square value="1"/>
      </div>
    </>
  )
}