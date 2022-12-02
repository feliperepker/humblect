import React from "react";
import { Route, Routes, Navigate, Outlet, useNavigate } from "react-router-dom";
import { ControlTower } from "../pages/ControlTower";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { isAuthenticated } from "../services/auth";

const PrivateRoutes = () => {
  return(
    isAuthenticated() ? <Outlet/> : <Navigate to="/"/>
  )
}
 
export function AppRoutes(){
  return(
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route element={<PrivateRoutes/>}>
          <Route element={<ControlTower/>} path="/controltower"/>
          <Route element={<Dashboard/>} path="/dashboard"/>
        </Route>
      </Routes>
    
  )

}