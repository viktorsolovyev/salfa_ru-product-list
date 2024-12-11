import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import './styles/normalize.css';
import './styles/global.css';

import ProductsPage from './pages/ProductsPage';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/products" replace />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '*',
        element: <Navigate to="/products" replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
);
