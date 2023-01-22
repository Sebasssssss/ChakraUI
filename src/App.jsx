import React from 'react'
import Navbar from './components/Navbar'
import { Box } from '@chakra-ui/react'
import '../public/global.css'
import { Route, Routes } from 'react-router'
import Home from './Page/Home'

export default function App() {
  return (
    <>
      <Navbar />
      <Box maxW={'3xl'} m={'auto'} textAlign={'center'}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </>
  )
}
