import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router'
const PersonalBlog = React.lazy(() => import('../../Page/Detail/personalBlog'))
const FootballWeb = React.lazy(() => import('../../Page/Detail/footballWeb'))
const GiffyApp = React.lazy(() => import('../../Page/Detail/giffy'))
const Home = React.lazy(() => import('../../Page/Home'))
const Works = React.lazy(() => import('../../Page/Works'))
const Contact = React.lazy(() => import('../../Page/Contact'))
const NotFound = React.lazy(() => import('../../Page/Error'))
const VercelWeb = React.lazy(() => import('../../Page/Detail/vercelMirror'))
const GTranslate = React.lazy(() => import('../../Page/Detail/GTranslate'))
const CinemaApp = React.lazy(() => import('../../Page/Detail/moviesapp'))

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
