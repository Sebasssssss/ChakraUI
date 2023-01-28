import React from 'react'
import PersonalBlog from '../../Page/Detail/personalBlog'
import FootballWeb from '../../Page/Detail/footballWeb'
import GiffyApp from '../../Page/Detail/giffy'
import Home from '../../Page/Home'
import Works from '../../Page/Works'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router'

export default function Router() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/work/personalBlog" element={<PersonalBlog />} />
          <Route path="/work/footballWeb" element={<FootballWeb />} />
          <Route path="/work/giffyapp" element={<GiffyApp />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
