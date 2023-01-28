import React from 'react'
import Main from './components/Main'
import { Container } from '@chakra-ui/react'
import '../public/fonts.css'
import '../public/global.css'
import Router from './components/Router'

export default function App() {
  return (
    <>
      <Main>
        <Container>
          <Router />
        </Container>
      </Main>
    </>
  )
}
