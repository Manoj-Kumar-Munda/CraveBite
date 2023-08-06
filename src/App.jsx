
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Main from './layouts/Main'
import Index from './pages/Index'
import Error from './pages/Error'
import RestaurantMenu from './pages/RestaurantMenu'



const router = createBrowserRouter([
  {
    path : "/",
    element : <Main/>,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Index />,
        errorElement : <Error />,
      },
      {
        path : "/restaurants/:id",
        element : <RestaurantMenu />
      
      },
      
    ]
    
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
