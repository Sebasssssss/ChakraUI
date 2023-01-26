import React from 'react'
import { Link, Text, useColorModeValue } from '@chakra-ui/react'

export function GithubDot({ to }) {
  return (
    <Link
      href={to}
      bg={useColorModeValue('#18181b', '#ffecef')}
      _hover={{ bg: useColorModeValue('#85586f', '#42032C') }}
      className="group footerDots"
      isExternal
    >
      <Text
        bg={useColorModeValue('white', '#42032c ')}
        _before={{ bg: useColorModeValue('white', '#42032C') }}
        className="footerToolTip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-top-10 duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:absolute before:content-[''] before:h-2 before:w-2 before:left-[44%] before:transtiion-all before:duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:-translate-2/4 before:rotate-45 before:-bottom-[3px]"
      >
        Github
      </Text>
    </Link>
  )
}

export function EmailDot({ to }) {
  return (
    <Link
      href={to}
      bg={useColorModeValue('#18181b', '#ffecef')}
      _hover={{ bg: useColorModeValue('#85586f', '#42032C') }}
      className="group footerDots"
    >
      <Text
        bg={useColorModeValue('white', '#42032C')}
        _before={{ bg: useColorModeValue('white', '#42032C') }}
        className="footerToolTip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-top-10 duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:absolute before:content-[''] before:h-2 before:w-2 before:left-[49%] before:transtiion-all before:duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:-translate-2/4 before:rotate-45 before:-bottom-[3px]"
      >
        sebastian.rodriguez9714@gmail.com
      </Text>
    </Link>
  )
}

export function InstagramDot({ to }) {
  return (
    <Link
      href={to}
      bg={useColorModeValue('#18181b', '#ffecef')}
      _hover={{ bg: useColorModeValue('#85586f', '#42032C') }}
      className="group footerDots"
    >
      <Text
        bg={useColorModeValue('white', '#42032C')}
        _before={{ bg: useColorModeValue('white', '#42032C') }}
        className="footerToolTip group-hover:opacity-100 group-hover:pointer-events-auto group-hover:-top-10 duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:absolute before:content-[''] before:h-2 before:w-2 before:left-[44%] before:transtiion-all before:duration-[0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)] before:-translate-2/4 before:rotate-45 before:-bottom-[3px]"
      >
        Instagram
      </Text>
    </Link>
  )
}
