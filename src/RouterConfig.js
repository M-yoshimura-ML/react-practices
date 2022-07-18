import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import UserForm from './pages/UserForm';
import ExpenseApp from "./pages/ExpenseApp";
import OptApp from "./pages/OptApp";
import ClassBasedApp from "./pages/ClassBasedApp";

export const RouterConfig=() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/user' element={<UserForm/>} />
        <Route path='/expense' element={<ExpenseApp/>} />
        <Route path='/optimization' element={<OptApp/>} />
        <Route path='/class-app' element={<ClassBasedApp/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}