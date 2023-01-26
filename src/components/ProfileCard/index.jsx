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
import Dot from '../Dots'

export default function Profile() {
  return (
    <Box>
      <Flex px={2} alignItems={'center'}>
        <Image
          src="https://i.pinimg.com/236x/7d/42/e0/7d42e0e49879f662ea93b6ae14d1d068.jpg"
          borderRadius={'1rem'}
          w={'100px'}
          h={'100px'}
          objectFit="cover"
          float={'right'}
        />
        <Flex px={2}>
          <Dot to="https://github.com/Sebasssssss" name="Github" />
          <Dot name="Email" />
          <Dot name="Instagram" />
        </Flex>
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
          left: '48px',
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
        <Text
          letterSpacing="0.2px"
          fontSize="14px"
          textIndent="1em"
          textAlign="justify"
        >
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
              color: useColorModeValue('#85586f', '#ea047e'),
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
