import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import ListOfCards from '../../components/ListOfCards'
import Layout from '../../components/Layout'
import image from '../../assets/pawdaPORT.png'

export default function Home() {
  return (
    <Layout>
      <Box
        borderRadius={12}
        bg={'#ffffff20'}
        p={4}
        display="inline-block"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        There are many benefits to a joint design and development system
      </Box>
      <Box
        pos={'relative'}
        mt={'45px'}
        display={'grid'}
        placeContent={'center'}
        h={'48'}
        zIndex={-1}
      >
        <Image src={image} />
      </Box>
      <ListOfCards />
    </Layout>
  )
}
