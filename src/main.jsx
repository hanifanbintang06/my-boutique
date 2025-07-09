import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPages'
import Category from './pages/Category'
import Collection from './pages/Collection'
import AllProduct from './pages/AllProduct'
import DetailProduct from './pages/DetailProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/category', element: <Category /> },
      { path: '/collection', element: <Collection /> },
      { path: '/product', element: <AllProduct /> },
      { path: '/product/id', element: <DetailProduct /> }
    ]
  },
  {
    path: '*', element: <NotFoundPage />
  }
], {
  basename: '/my-boutique/'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
