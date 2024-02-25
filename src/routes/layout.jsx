import {
  Outlet
} from 'react-router-dom'

export default function Layout () {
  return (
    <>
      <div id='sidebar'>

      </div>
      <div
        id='detail'
      >
        <Outlet />
      </div>
    </>
  )
}