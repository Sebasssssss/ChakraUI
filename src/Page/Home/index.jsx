import React from 'react'
import Layout from '../../components/Layout'
import Profile from '../../components/Profile'
import Bio from '../../components/Bio'
import MyPortfolioSection from '../../components/MyPortfolioSection'
import { Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout delay="0.2">
      <Center borderRadius="lg" bg="#ffffff20" p="3" w="full" mb="6">
        Yo! I'm Sebass, a developer based in Uruguay!
      </Center>
      <Profile />
      <Bio />
      <MyPortfolioSection />
    </Layout>
  )
}
