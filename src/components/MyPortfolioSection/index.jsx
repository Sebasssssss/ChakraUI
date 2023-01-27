import React from 'react'
import {
  Box,
  Button,
  Image,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link as ReactLink } from 'react-router-dom'

export default function MyPortfolioSection() {
  return (
    <>
      <Box className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-6">
        <Link as={ReactLink} to="/detail" className="w-full mb-4 text-center">
          <Image
            src="https://i.pinimg.com/564x/cc/c7/b7/ccc7b72e8d2ff092eccff8d52eb1af7c.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
          />
          <Text className="text-md mt-3 font-mplus font-bold">Title</Text>
          <Text className="text-sm opacity-70">Subtitle</Text>
        </Link>
        <Link as={ReactLink} to="/detail" className="w-full mb-4 text-center">
          <Image
            src="https://i.pinimg.com/564x/b1/7f/f0/b17ff0a32d55ec4adb61c1b51459a396.jpg"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-xl h-36 object-cover"
          />
          <Text className="text-md mt-3 font-mplus font-bold">Title</Text>
          <Text className="text-sm opacity-70">Subtitle</Text>
        </Link>
      </Box>
      <Button
        bg={useColorModeValue('#85586f', '#ea047e90')}
        textColor="#fff"
        _hover={{ bg: useColorModeValue('#ab718e', '#ea047e') }}
        as={ReactLink}
        to="/page2"
      >
        My Portfolio <ChevronRightIcon />
      </Button>
    </>
  )
}
