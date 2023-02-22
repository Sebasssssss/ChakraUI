import React from 'react'
import Layout from '../../components/layouts/article'
import Profile from '../../components/Profile'
import Bio from '../../components/Bio'
import PopularPosts from '../../components/PopularPosts'
import { Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Layout delay="0.2">
        <Center borderRadius="lg" bg="#ffffff20" p="3" w="full" my="6">
          Yo! I'm Sebass, a developer based in Uruguay!
        </Center>
        <Profile />
        <Bio />
        <PopularPosts />
      </Layout>
    </>
  )
}
