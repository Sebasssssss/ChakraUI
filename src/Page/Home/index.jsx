import React from 'react'
import { Box } from '@chakra-ui/react'
import ListOfCards from '../../components/ListOfCards'
import Layout from '../../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Box borderRadius={12} bg={'#ffffff20'} p={4} display="inline-block">
        There are many benefits to a joint design and development system
      </Box>
      <ListOfCards />
    </Layout>
  )
}
