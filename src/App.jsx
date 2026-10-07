import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Favorite from './components/Favorite'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/favorite",
      element: <Favorite/>
    }
  ])  
  return (
   <RouterProvider router={router} />
  )
}

export default App
