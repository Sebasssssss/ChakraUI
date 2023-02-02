import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const LazyPawda = React.lazy(() => import('../3DModel/voxel-pawda'), {
  ssr: false,
  loading: () => <Loader />
})

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW={'container.md'} m={'auto'} textAlign={'center'} pt={20}>
        <LazyPawda />
        <Box h="200px" pos="absolute" left="0" top="25rem" w="full"></Box>
        {children}
      </Container>
      <Footer />
    </>
  )
}
