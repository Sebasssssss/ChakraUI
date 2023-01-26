import React from 'react'
import { Box, Button, Center, Image, useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import Profile from '../../components/ProfileCard'
import image from '../../assets/pawdaPORT.png'
import Bio from '../../components/Bio'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <Layout delay="0.2">
      <Center borderRadius="lg" bg={'#ffffff20'} p={3} w="full" mb={6}>
        Yo! I'm Sebass, a developer based in Uruguay!
      </Center>
      <Profile />
      <Box h="212px" w="full" overflow="hidden">
        <Image src={image} />
      </Box>
      <Button
        bg={useColorModeValue('#85586f', '#ea047e90')}
        textColor="#fff"
        _hover={{ bg: useColorModeValue('#85586f', '#ea047e') }}
      >
        Download CV <ChevronRightIcon />
      </Button>
      <Bio />
    </Layout>
  )
}
