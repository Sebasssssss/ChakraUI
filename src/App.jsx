import React from 'react'
import Home from './Page/Home'
import Main from './components/Main'
import Works from './Page/Works'
import { Container } from '@chakra-ui/react'
import { Route, Routes, useLocation } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import '../public/fonts.css'
import '../public/global.css'
import PersonalBlog from './Page/Detail'
import FootballWeb from './Page/Detail/footballWeb'

export default function App() {
  const location = useLocation()
  return (
    <>
      <Main>
        <Container>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/Detail/personalBlog" element={<PersonalBlog />} />
              <Route path="/Detail/footballWeb" element={<FootballWeb />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </Main>
    </>
  )
}
