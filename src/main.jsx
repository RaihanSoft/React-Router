import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './assets/Components/Home/Home.jsx';
import Header from './assets/Components/Hearder/Header.jsx';
import About from './assets/Components/About/About.jsx';
import Contact from './assets/Components/Contact/Contact.jsx';
import Users from './assets/Components/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [


      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      }, {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />
      },
    ]
  },


]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
