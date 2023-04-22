import React from 'react'
import PersonalBlog from '../../Page/Detail/personalBlog'
import FootballWeb from '../../Page/Detail/footballWeb'
import GiffyApp from '../../Page/Detail/giffy'
import Home from '../../Page/Home'
import Works from '../../Page/Works'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router'
import Contact from '../../Page/Contact'
import NotFound from '../../Page/Error'
import VercelWeb from '../../Page/Detail/vercelMirror'
import CinemaApp from '../../Page/Detail/moviesapp'
import GTranslate from '../../Page/Detail/GTranslate'

export default function Router() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/personalBlog" element={<PersonalBlog />} />
          <Route path="/work/footballWeb" element={<FootballWeb />} />
          <Route path="/work/giffyapp" element={<GiffyApp />} />
          <Route path="/work/vercelmirror" element={<VercelWeb />} />
          <Route path="/work/cinema" element={<CinemaApp />} />
          <Route path="/work/translate" element={<GTranslate />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
