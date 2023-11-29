import React from 'react'
import './index.css'
import Provider from './components/Provider/Provider'
import NewSchedule from './components/Provider/NewSchedule'
import Client from './components/Client'
import Button from '@mui/material/Button'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="flex flex-col	content-center justify-center text-center	">
        <h1 className="text-lg font-bold mt-8">Henry Meds Reservation App</h1>
        <Button variant="contained" sx={{ marginTop: '8px' }}>
          <Link className="w-full" to="provider">
            I am a provider
          </Link>
        </Button>
        <Button variant="contained" sx={{ marginTop: '8px' }}>
          <Link className="w-full" to="client">
            I am a client
          </Link>
        </Button>
      </div>
    ),
  },
  {
    path: 'provider',
    element: <Provider />,
  },
  {
    path: 'provider/new_schedule',
    element: <NewSchedule />,
  },
  {
    path: 'client',
    element: <Client />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
