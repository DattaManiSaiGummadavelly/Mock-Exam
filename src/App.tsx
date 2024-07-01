import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import AddTask from './AddTask';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<HomePage/>}></Route>
        <Route path='addtask' element={<AddTask/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
