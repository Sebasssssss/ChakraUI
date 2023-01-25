import React from 'react'
import { Box, Center, Image, Text, useColorModeValue } from '@chakra-ui/react'
import ListOfCards from '../../components/ListOfCards'
import Layout from '../../components/Layout'
import Profile from '../../components/ProfileCard'
import image from '../../assets/pawdaPORT.png'

export default function Home() {
  return (
    <Layout>
      <Center borderRadius="lg" bg={'#ffffff20'} p={3} w="full" mb={6}>
        There are many benefits to a joint design and
      </Center>
      <Profile />
      <Box h="212px" w="full" overflow="hidden">
        <Image src={image} />
      </Box>
      <Text
        pt="4"
        pb="9"
        fontSize="24"
        fontWeight="bold"
        className="font-mplus"
        textColor={useColorModeValue('#85586f', '#ffecef')}
      >
        Projects
      </Text>
      <ListOfCards />
    </Layout>
  )
}
