import React from 'react'
import { Box } from '@chakra-ui/react'
import ListOfCards from '../../components/ListOfCards'
import Layout from '../../components/Layout'
import Profile from '../../components/ProfileCard'

export default function Home() {
  return (
    <Layout>
      <Box borderRadius={'1rem'} bg={'#ffffff20'} p={4} display="inline-block">
        There are many benefits to a joint design and development system
      </Box>
      <Profile />
      <ListOfCards />
    </Layout>
  )
}
