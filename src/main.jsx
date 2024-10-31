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
import UserDetails from './assets/Components/UserDetails/UserDetails.jsx';
import Posts from './assets/Components/Posts/Posts.jsx';
import PostDetails from './assets/Components/PostDetails/PostDetails.jsx';
import ErrorPage from './assets/Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [


      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />
      }, {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />
      },
      {
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts />

      },
      {
        path: '/post/:postId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails />
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
