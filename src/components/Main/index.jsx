import { Container } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer'
import Layout from '../Layout'
import Navbar from '../Navbar'
import Loader from '../voxel-pawda-loader'

const LazyPawda = React.lazy(() => import('../voxel-pawda'), {
  ssr: false,
  loading: () => <Loader />
})

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW={'container.md'} m={'auto'} textAlign={'center'} pt={20}>
        <LazyPawda />
        <Layout>{children}</Layout>
      </Container>
      <Footer />
    </>
  )
}
