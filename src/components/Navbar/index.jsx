import React from 'react'
import ToggleColorMode from '../ToggleThemeButton'
import Footprint from '../icons/footprint'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box
      position="fixed"
      top={'0'}
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#18181b40')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Flex
        h={14}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'container.md'}
        mx={'auto'}
      >
        <Flex alignItems="center">
          <Link
            _hover={{ textDecoration: 'none' }}
            to="/"
            className="group text-lg p-2 font-semibold inline-flex items-center gap-1.5 tracking-tighter font-mplus"
          >
            <Footprint />
            Sebass
          </Link>
          <Link to="/page2" className="p-2 bg-[#ff6d28]/70">
            Works
          </Link>
        </Flex>
        <ToggleColorMode />
      </Flex>
    </Box>
  )
}
