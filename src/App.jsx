import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//import './App.css'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreator from './pages/ShowCreators'
import Creator from './pages/ViewCreator'
import ErrorPage from './pages/errorPage'

import Root from './pages/root'

function App() {
    const router =useRoutes([
    {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
  
    children:[
    //   // {index:true,element:<Index/>},
      {
        path:"creators",
        element:<ShowCreator/>,
        //loader:
      },
      {
        path:"view/:creatorId",
        element:<Creator/>,
      },
      {
        path:"addCreator",
        element:<AddCreator/>
      },
      {
        path:"edit/:creatorId",
        element:<EditCreator/>
      },
    ],
  },
  
  ])
  console.log(router)
  return router
 
}

export default App
