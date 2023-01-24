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
      bg={useColorModeValue('#ffffff40', '#14141680')}
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
        <Flex>
          <Link
            _hover={{ textDecoration: 'none' }}
            to="/"
            className="group text-lg p-2 font-semibold inline-flex items-center gap-1.5 tracking-tighter font-mplus"
          >
            <Footprint />
            Sebass
          </Link>
          <Link
            to="/page2"
            className="items-center bg-transparent text-white cursor-pointer flex font-mplus text-md font-bold leading-[1.5] decoration-inherit outline-none px-4 before:bg-white before:content-[''] before:inline-block before:h-[1px] before:transition-all before:duration-[.42s cubic-bezier(.25,.8,.25,1)] before:w-0 hover:before:bg-white hover:before:w-8"
          >
            Work
          </Link>
        </Flex>
        <ToggleColorMode />
      </Flex>
    </Box>
  )
}
