import { useState,useEffect } from 'react'
import {useRoutes} from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreator from './pages/ShowCreators'
import Creator from './pages/ViewCreator'
import ErrorPage from './pages/errorPage'
import {supabase} from './client'
import ViewCreator from './pages/ViewCreator';

import Root from './pages/root'

function App() {

      
    const [creators,setCreators]=useState([])
    useEffect(()=>{
        const fetchCreators=async()=>{
            try{
            const{data,error}=await supabase.from('creators').select()
                setCreators(data)
                // console.log(data)
            }
            catch(error){
                console.log(error)
                //set error mesage that can display instead
            }
        }
        fetchCreators()
    },[])






    const router =useRoutes([
    {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
  
    children:[
    //   // {index:true,element:<Index/>},
      {
        path:"creators",
        element:<ShowCreator creators={creators}/>,
        //loader:
      },
      {
        path:"creators/:creatorId",
        element:<Creator/>,
        
      },
      {
        path:"addCreator",
        element:<AddCreator/>
      },
      {
        path:"creators/edit/:creatorId",
        element:<EditCreator/>
      },
      {
        path:"creators/view/:creatorId",
        element:<ViewCreator/>
      }
    ],
  },
  
  ])
 
  return router
 
}

export default App
