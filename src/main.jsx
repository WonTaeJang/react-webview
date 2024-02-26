import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import App from './App.jsx'
import './index.css'
import { router } from './routes/routes'

// import Layout from './layout/layout.jsx'
// import ErrorPage from './pages/error-page'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: 'help/how-to-use',
//         element: <App />
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router()} />
  </React.StrictMode>,
)
