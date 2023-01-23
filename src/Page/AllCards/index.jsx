import React from 'react'
import { Box } from '@chakra-ui/react'
import ListOfCards from '../../components/ListOfCards'

export default function Home() {
  return (
    <>
      <Box
        borderRadius={12}
        bg={'#ffffff20'}
        p={4}
        display="inline-block"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        There are many benefits to a joint design and development system
      </Box>
      <ListOfCards />
    </>
  )
}
