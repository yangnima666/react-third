import React from "react";
import { HashRouter, Route } from 'react-router-dom'
import { Login } from "../pages";

export const IndexRouter: React.FC = () => {
  return (
    <HashRouter>
      <Route path="/login" element={<Login/>}/>
    </HashRouter>
    
  )
}