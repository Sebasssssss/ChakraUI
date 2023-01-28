import React from 'react'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})
export default function Section({ children, delay = 0 }) {
  return (
    <ChakraBox
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </ChakraBox>
  )
}
