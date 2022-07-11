import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import UserForm from './pages/UserForm';



export const RouterConfig=() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/user' element={<UserForm/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}