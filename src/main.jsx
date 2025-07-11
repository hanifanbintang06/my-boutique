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
import Search from './pages/Search'
import Login from './pages/Login'
import Profile from './pages/Profile'
import DetailCollection from './pages/DetailCollection'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/category', element: <Category /> },
      { path: '/collection', element: <Collection /> },
      { path: '/product', element: <AllProduct /> },
      { path: '/product/id', element: <DetailProduct /> },
      { path: '/search/q', element: <Search /> },
      { path: '/profile', element: <Profile /> },
      { path: '/collection/id', element: <DetailCollection /> }
    ]
  },
  {
    path: '*', element: <NotFoundPage />
  },
  { 
    path: '/login', element: <Login /> 
  }
], {
  basename: '/my-boutique/'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
