import { createBrowserRouter } from "react-router-dom"
import HowToUse from '../pages/how-to-use.jsx'
import Layout from '../layout/layout.jsx'
import ErrorPage from '../pages/error-page.jsx'

export const router = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'help/how-to-use',
          element: <HowToUse />
        }
      ]
    }
  ])
}