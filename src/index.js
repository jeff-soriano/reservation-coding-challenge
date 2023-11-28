import React from 'react'
import './index.css'
import Provider from './components/Provider/Provider'
import NewSchedule from './components/Provider/NewSchedule'
import Client from './components/Client'

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Henry Meds Reservation App</h1>
        <Link className="block" to="provider">
          I am a provider
        </Link>
        <Link className="block" to="client">
          I am a client
        </Link>
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
