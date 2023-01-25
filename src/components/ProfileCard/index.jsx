import {
  Box,
  Flex,
  Grid,
  Highlight,
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
          <Highlight
            query={[
              'html',
              'css',
              'php',
              'github',
              'git',
              'Tailwindcss',
              'React'
            ]}
            styles={{
              bg: useColorModeValue('#85586f', '#d36b00'),
              px: '1.5',
              py: '0.3',
              rounded: 'sm'
            }}
          >
            Yo! I'm Sebass. I'm a self taught developer who's started
            programming by learning html, and css. After learning the basics, i
            quickly moved to php, because i really liked it and thought it would
            be a good language to start my developer career. Consequently, i
            learned the basics of git and github because of how powerful can be
            and many people recommended to me. After a while, i made a very
            simple website to understand how to use Tailwindcss, and after using
            it, i thought that it was a really cool tool for making websites.
            Later on, i decided to start learning javascript, in order to
            understand React, because i love how the code looks and how it works
            it in almost every aspect.
          </Highlight>
        </Text>
      </Grid>
    </Box>
  )
}
