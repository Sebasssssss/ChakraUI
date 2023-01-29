import React from 'react'
import ToggleColorMode from '../ToggleThemeButton'
import Footprint from '../icons/footprint'
import { Box, Flex, useColorModeValue, Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { IoLogoGithub } from 'react-icons/io5'

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
        p="1.5"
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
            className="group text-lg p-2 font-semibold inline-flex font-mplus items-center gap-1.5 tracking-tighter"
          >
            <Footprint />
            Sebass
          </Link>
          <Link
            as={NavLink}
            to="/works"
            p="2"
            rounded="sm"
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: useColorModeValue('#00abb280', '#00f5ff90')
                  }
                : null
            }
          >
            Works
          </Link>
          <Link
            href="https://github.com/Sebasssssss/Portfolio"
            p="2"
            rounded="sm"
            display="inline-flex"
            gap="1"
            alignItems="center"
            isExternal
          >
            <IoLogoGithub /> Source
          </Link>
        </Flex>
        <ToggleColorMode />
      </Flex>
    </Box>
  )
}
