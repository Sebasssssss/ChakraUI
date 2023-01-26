import React from 'react'
import ToggleColorMode from '../ToggleThemeButton'
import Footprint from '../icons/footprint'
import { Box, Flex, useColorModeValue, Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

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
            as={NavLink}
            _hover={{ textDecoration: 'none' }}
            to="/"
            className="group text-lg p-2 font-semibold inline-flex items-center gap-1.5 tracking-tighter font-mplus"
          >
            <Footprint />
            Sebass
          </Link>
          <Link
            as={NavLink}
            to="/page2"
            p="2"
            rounded="sm"
            style={({ isActive }) =>
              isActive ? { backgroundColor: '#00f5ff50' } : null
            }
          >
            Works
          </Link>
        </Flex>
        <ToggleColorMode />
      </Flex>
    </Box>
  )
}
