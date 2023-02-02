import React, { forwardRef } from 'react'
import ToggleColorMode from '../ToggleThemeButton'
import Footprint from '../icons/footprint'
import {
  Box,
  Flex,
  useColorModeValue,
  Link,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as ReactLink, NavLink } from 'react-router-dom'

const MenuLink = forwardRef((props, ref) => (
  <Link as={ReactLink} ref={ref} {...props} />
))

export default function Navbar() {
  let activeLink = {
    backgroundColor: useColorModeValue('#00abb280', '#00f5ff90')
  }

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
        <Flex alignItems="center" gap="2">
          <Link
            as={NavLink}
            _hover={{ textDecoration: 'none' }}
            to="/"
            className="group text-lg p-2 font-semibold inline-flex font-mplus items-center gap-1.5 tracking-tighter"
          >
            <Footprint />
            Sebass
          </Link>
          <Box gap="2" display={{ base: 'none', md: 'flex' }}>
            <Link
              as={NavLink}
              to="/works"
              p="2"
              rounded="sm"
              _activeLink={activeLink}
            >
              Works
            </Link>
            <Link
              as={NavLink}
              to="/contact"
              p="2"
              rounded="sm"
              _activeLink={activeLink}
            >
              Contact
            </Link>
            <Link
              href="https://github.com/Sebasssssss/sebass-homepage"
              p="2"
              rounded="sm"
              display="inline-flex"
              gap="1"
              alignItems="center"
              isExternal
            >
              <IoLogoGithub /> Source
            </Link>
          </Box>
        </Flex>
        <Flex gap="3">
          <ToggleColorMode />
          <Box display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                bg="transparent"
                border="1px"
                borderColor="#334155"
              />
              <MenuList>
                <MenuItem as={MenuLink} to="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} to="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} to="/contact">
                  Contact
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  to="https://github.com/Sebasssssss"
                  display="inline-flex"
                  alignItems="center"
                  gap="1"
                >
                  <IoLogoGithub /> Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
