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

const basePath = '/Space-tourism-website';
console.log("Current environment:", process.env.NODE_ENV);
console.log("Base path:", basePath);

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
        path: "destination",
        element: <Destination />,
        loader: () => ({ destinations: data.destinations, pageIndex: 1 })
      },
      {
        path: "crew",
        element: <Crew />,
        loader: () => ({ crew: data.crew, pageIndex: 2 })
      },
      {
        path: "technology",
        element: <Technology />,
        loader: () => ({ technology: data.technology, pageIndex: 3 })
      }
    ]
  }
], {
  basename: basePath
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
