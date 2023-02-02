import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      bg={useColorModeValue('#85586f', null)}
      _hover={{ bg: useColorModeValue('#774f63', null) }}
      textColor={useColorModeValue('#f8ede3', null)}
      colorScheme={useColorModeValue(null, 'orange')}
      p={1}
      onClick={() => toggleColorMode()}
    >
      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ToggleColorMode
