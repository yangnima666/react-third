import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { RouteObject, useRoutes } from 'react-router-dom'
import { Login, RightList, RoleList, UserList } from './pages';
import { Home } from './pages/home/Home';
import { HomeLayOut } from './component';
// import { IndexRouter } from './router';


function App() {

  const route: RouteObject[] = [
    {
      path:"/",
      element:<HomeLayOut/>,
      
      children:[
        { index:true, element:<Home/>},
        // { path: '/user', element:<}
        {
          path:'/user/list',
          element:<UserList/>,
          
        },
        {
          path:'/role/list',
          element:<RoleList/>
        },
        {
          path:'/right/list',
          element:<RightList/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>,
      
    },
    
  ]
  const router = useRoutes(route)
  return (
    <div className="App">
      {router}
     
    </div>
  );
}

export default App;
