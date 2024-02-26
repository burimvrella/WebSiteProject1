import React from 'react'
import {Route, Routes, useLocation} from "react-router-dom";
import Home from '../../Pages/Home/Home';
import Project from '../../Pages/Projects/Project';
import Contact from '../../Pages/Contect/Contact';
import About from '../../Pages/About/About';

import { AnimatePresence } from 'framer-motion'


function AnimatedRoute() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/'  element={<Home/>} />
        <Route path='/project'  element={<Project/>} />
        <Route path='/contact'  element={<Contact/>} />
        <Route path='/about'  element={<About/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoute