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
      <Flex px={2} alignItems={'center'}>
        <Image
          src="https://i.pinimg.com/564x/06/6a/68/066a684447293195aeb393e40453211c.jpg"
          borderRadius={'1rem'}
          w={'100px'}
          h={'100px'}
          objectFit="cover"
          float={'right'}
        />
        <Box pt={4} px={2}>
          <Dots />
        </Box>
      </Flex>
      <Grid
        textAlign="left"
        bg={useColorModeValue('#dfd3c3', '#121212')}
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
            '#121212'
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
        <Text letterSpacing="0.2px" fontSize="13px">
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
