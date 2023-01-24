import React from 'react'
import { Box, Text, useColorModeValue } from '@chakra-ui/react'

function Dots() {
  return (
    <ul className="inline-flex list-none h-10 w-full justify-center">
      <Box
        bg={useColorModeValue('#18181b', 'white')}
        _hover={{ bg: useColorModeValue('#85586f', '#F1EFDC') }}
        className="group footerDots"
      >
        <Text
          bg={useColorModeValue('white', '#42032C')}
          _before={{ bg: useColorModeValue('white', '#42032C') }}
          className="footerToolTip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-top-10 duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:absolute before:content-[''] before:h-2 before:w-2 before:left-[44%] before:transtiion-all before:duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:-translate-2/4 before:rotate-45 before:-bottom-[3px]"
        >
          Github
        </Text>
      </Box>
      <Box
        bg={useColorModeValue('#18181b', 'white')}
        _hover={{ bg: useColorModeValue('#85586f', '#F1EFDC') }}
        className="group footerDots"
      >
        <Text
          bg={useColorModeValue('white', '#42032C')}
          _before={{ bg: useColorModeValue('white', '#42032C') }}
          className="footerToolTip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-top-10 duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:absolute before:content-[''] before:h-2 before:w-2 before:left-[44%] before:transtiion-all before:duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:-translate-2/4 before:rotate-45 before:-bottom-[3px]"
        >
          Twitter
        </Text>
      </Box>
      <Box
        bg={useColorModeValue('#18181b', 'white')}
        _hover={{ bg: useColorModeValue('#85586f', '#F1EFDC') }}
        className="group footerDots"
      >
        <Text
          bg={useColorModeValue('white', '#42032C')}
          _before={{ bg: useColorModeValue('white', '#42032C') }}
          className="footerToolTip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-top-10 duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:absolute before:content-[''] before:h-2 before:w-2 before:left-[44%] before:transtiion-all before:duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:-translate-2/4 before:rotate-45 before:-bottom-[3px]"
        >
          Facebook
        </Text>
      </Box>
    </ul>
  )
}

export default React.memo(Dots)
