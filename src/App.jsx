import React from 'react'
import Main from './components/Main'
import Router from './components/Router'
import Fonts from './components/Fonts'
import { Container } from '@chakra-ui/react'
import '../public/global.css'

export default function App() {
  return (
    <>
      <Main>
        <Fonts />
        <Container>
          <Router />
        </Container>
      </Main>
    </>
  )
}
