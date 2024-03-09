import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import testData from '../src/assets/json/test-data.json'

import './index.css'
import { router } from './routes/routes'

// 
const mock = new MockAdapter(axios)
mock.onGet("/faq", { params: { tags: "temp", locale: 'en_US' } }).reply(200, {
  faqs: [...testData],
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router()} />
  </React.StrictMode>,
)
