import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Dots from '../Dots'

export default function Profile() {
  return (
    <Box>
      <Flex px={2} mt={5} alignItems={'center'}>
        <Image
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
          borderRadius={'1rem'}
          maxW={'100%'}
          h={'80px'}
          float={'right'}
        />
        <Box pt={4} px={2}>
          <Dots />
        </Box>
      </Flex>
      <Grid
        textAlign="left"
        bg={useColorModeValue('#dfd3c3', '#ffffff20')}
        borderRadius="0.8rem"
        column="3"
        mt="15px"
        gap="2px"
        p="25px"
        pos="relative"
        w="full"
        boxShadow="lg"
        _before={{
          borderColor: `transparent transparent ${useColorModeValue(
            '#dfd3c3',
            '#ffffff20'
          )} transparent`,
          borderStyle: 'solid',
          borderWidth: '0 10px 10px 10px',
          bottom: '100%',
          content: "''",
          h: '0',
          left: '32px',
          pos: 'absolute',
          w: '0'
        }}
      >
        <Text fontWeight="bold" fontSize="20px" className="font-mplus">
          Sebass Rodriguez
        </Text>
        <Text
          opacity="0.7"
          letterSpacing="2px"
          fontWeight="400"
          fontSize="15px"
        >
          Developer
        </Text>
        <Text letterSpacing="0.1px" fontSize="0.9rem" fontSize="13px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id
          nihil, at dolorum eaque maiores quia amet sit eius libero nulla ipsam
          perferendis consectetur obcaecati fugiat, odio quas non facere dicta
          nisi nobis accusantium! doloribus libero inventore delectus animi
          quasi perferendis consectetur obcaecati fugiat, odio quas non facere
          dicta nisi nobis accusantium! doloribus libero inventore delectus
          animi quasi voluptatibus possimus excepturi,
        </Text>
      </Grid>
    </Box>
  )
}
