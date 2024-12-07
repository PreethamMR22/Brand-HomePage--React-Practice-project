import React from 'react'
import { Route,Routes,useLocation } from 'react-router-dom'
import LeftTextHero from './LeftTextHero'
import Login from './Login'
import {AnimatePresence} from 'framer-motion'
function AnimatedComponents() {
    const location=useLocation();
  return (
    <>
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
     <Route path="/" element={<LeftTextHero />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </AnimatePresence>

    </>
  )
}

export default AnimatedComponents
