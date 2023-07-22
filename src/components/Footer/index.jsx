import React from 'react'
import { Box, Text, Link } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box textAlign="center" pt="8" pb="4" opacity="0.5">
      <Text fontSize="sm">
        Web based on{' '}
        <Link target="_blank" href="https://www.craftz.dog/">
          devaslife's portfolio
        </Link>
      </Text>
    </Box>
  )
}
