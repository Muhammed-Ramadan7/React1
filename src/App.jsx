import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Notfound from './component/Notfound/Notfound'
import About from './component/About/About'
import Portfolio from './component/Portfolio/Portfolio'
import Contact from './component/Contact/Contact'
let routers = createBrowserRouter([
  {path: '' , element: <Layout/>, errorElement:<Notfound/>, children:[
    {index:true, element: <Home/>},
    {path: 'about', element: <About/>},
    {path: 'portfolio', element: <Portfolio/>},
    {path: 'about', element: <About/>},
    {path: 'contact', element: <Contact/>},
    {path: '*', element: <Notfound/>}
  ]
  }
])


function App() {

  return (
    <>

   <RouterProvider router = {routers}></RouterProvider>


    </>
  )
}

export default App
