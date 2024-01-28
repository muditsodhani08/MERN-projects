//import { useState } from 'react'
import Signup from "./Signup"
import Log from './Log'
import Home from './Home'
import {BrowserRouter,Routes,Route}from "react-router-dom";

function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Signup/>}></Route>
      <Route path="/log" element={<Log/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App;
