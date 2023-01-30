import React from 'react'
import Main from './components/Main'
import Router from './components/Router'
import Fonts from './components/Fonts'
import { Container } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import '../public/global.css'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Sebass Rodriguez | Homepage</title>
      </Helmet>
      <Main>
        <Fonts />
        <Container>
          <Router />
        </Container>
      </Main>
    </>
  )
}
