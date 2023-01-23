import { Container } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Loader from '../3DModel/voxel-pawda-loader'

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
        {children}
      </Container>
      <Footer />
    </>
  )
}
