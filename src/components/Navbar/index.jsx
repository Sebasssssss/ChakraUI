import React from 'react'
import { Box, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import ToggleColorMode from '../toggleThemeButton'
import Footprint from '../Footprint'
import SearchForm from '../SearchForm'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box
      position="fixed"
      top={'0'}
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#14141680')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'container.md'}
        mx={'auto'}
      >
        <Link
          _hover={{ textDecoration: 'none' }}
          to="/"
          className="group text-lg p-2 font-semibold inline-flex items-center gap-1.5 tracking-tighter font-mplus"
        >
          <Footprint />
          Sebass
        </Link>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <SearchForm />
            <ToggleColorMode />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
