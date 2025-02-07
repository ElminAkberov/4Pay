import { createRoot } from 'react-dom/client'
import './global.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
