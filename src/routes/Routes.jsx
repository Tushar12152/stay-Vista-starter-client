import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import { getRoom } from '../Api/Rooms'
import DashboardLayout from '../layouts/DashBoard'
import AddRoom from '../pages/DashBoard/Host/AddRoom'
import MyListing from '../pages/DashBoard/Host/MyListing'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
       
      },
      {
        path:'/room/:id',
        element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader:({params})=>getRoom(params.id)

      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
     path:'/dashboard',
     element:<DashboardLayout></DashboardLayout>,
     children:[
          {
               path:"/dashboard/add-room",
               element:<AddRoom></AddRoom>
          },
          {
            path:"/dashboard/mylist",
            element:<MyListing></MyListing>
          }
     ]
  }
])
