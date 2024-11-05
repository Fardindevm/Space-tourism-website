import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home'
import data from './data.json'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => ({ pageIndex: 0 })

      },
      {
        path: "/destination",
        element: <Destination />,
        loader: () => ({ destinations: data.destinations, pageIndex: 1 })
      },
      {
        path: "/crew",
        element: <Crew />,
        loader: () => ({ crew: data.crew, pageIndex: 2 })
      },
      {
        path: "/technology",
        element: <Technology />,
        loader: () => ({ technology: data.technology, pageIndex: 3 })
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
