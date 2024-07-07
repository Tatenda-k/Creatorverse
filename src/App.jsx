import {useRoutes} from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'


import './App.css'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreator from './pages/ShowCreators'
import Creator from './pages/ViewCreator'
import ErrorPage from './pages/errorPage'
import ViewCreator from './pages/ViewCreator';
import Root from './pages/root'

function App() {

    
    const router =useRoutes([
    {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
  
    children:[
   
      {
        path:"/",
        element:<ShowCreator />,
        
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
        path:"edit/:creatorId",
        element:<EditCreator/>
      },
      {
        path:"view/:creatorId",
        element:<ViewCreator/>
      }
    ],
  },
  {
    path:"*",
    element:<ErrorPage />
  }
  
  ])
 
  return (

        <ErrorBoundary>
          {router}
        </ErrorBoundary>
        
    
  )
 
}

export default App
