import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { RouteObject, useRoutes } from 'react-router-dom'
import { Welcome } from './pages';
import { Home } from './pages/home/Home';


function App() {

  const route: RouteObject[] = [
    {
      path:"/",
      element:<Home/>,
      
    },
    {
      path:'/welcome',
      element:<Welcome/>
    }
  ]
  const router = useRoutes(route)
  return (
    <div className="App">
      {router}
    </div>
  );
}

export default App;
