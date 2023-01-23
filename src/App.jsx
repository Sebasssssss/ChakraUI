import React from 'react'
import Home from './Page/Home'
import Main from './components/Main'
import AlternativeCards from './components/AlternativeCards'
import { Container } from '@chakra-ui/react'
import { Route, Routes, useLocation } from 'react-router'
import '../public/fonts.css'
import '../public/global.css'
import { AnimatePresence } from 'framer-motion'

export default function App() {
  const location = useLocation()
  return (
    <>
      <Main>
        <Container>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/page2" element={<AlternativeCards />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </Main>
    </>
  )
}
